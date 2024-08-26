const db = require("../models");
const ServiceFormDetail = db.ServiceFormDetail;
const ServiceForm = db.ServiceForm;

/*
cart item reference:
cart = [
  {
    ServiceFormId
    ServiceTypeId,
    incurred:
    quantity:
    subtotal:
    prePaid
    remain
    deliverDate
  }
]
*/
const createServiceDetails = async (cart) => {
  let success;
  const result = await Promise.all(
    cart.map(async (item) => {
      try {
        const created = await ServiceFormDetail.create({
          ...item,
        });
        console.log(created);
        if (!created) {
          success = false;
        }
      } catch (error) {
        console.log("Something went wrong", error);
        success = false;
      }
    })
  )
    .then((details) => {
      console.log("Service details created", details);
      success = true;
    })
    .catch((err) => {
      console.log(err);
      success = false;
    });
    return success;
};

const updateServiceDetail = async (req, res) => {
  let ServiceFormId = req.params.id;
  const { ServiceTypeId, deliverDate } = req.body;
  let result;
  try {
    let form = await ServiceFormDetail.findOne({
      where: {
        ServiceFormId: ServiceFormId,
        ServiceTypeId: ServiceTypeId,
      },
    });
    if (form) {
      form.deliverDate = deliverDate;
      form.status = "Đã giao";
      form.remain = 0;
      await form.save();
      result = form;
    } else {
      console.log(error)
      res.status(400).send("form not found");
      return;
    }
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
    return;
  }
  // Update phiếu nếu tất cả dịch vụ đã được giao
  try {
    let serviceform = await ServiceForm.findByPk(ServiceFormId);
    if (!serviceform) {
      res.status(400).send("Unable to update form");
      return;
    } else {
      let details = await ServiceFormDetail.findAll({
        where: {
          ServiceFormId: ServiceFormId,
        },
      });
      if (details) {
        let complete = true;
        details.forEach((detail) => {
          if (detail.status !== "Đã giao") {
            complete = false;
          }
        });
        serviceform.remain = details.reduce((total, detail) => {
          return total + detail.remain
        }, 0);
        if (complete) {
          console.log(serviceform);
          serviceform.status = "Hoàn thành";
          await serviceform.save();
        }
      } else {
        console.log(error);
        res.status(400).send("can't update form");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("can't update form");
    return
  }
  res.status(200).send(result);
  return;
};

const getServiceDetails = async (req, res) => {
  const formId = req.params.id;
  let details = await ServiceFormDetail.findAll({
    where: {
      ServiceFormId: formId,
    },
    include: [
      {
        model: db.ServiceType,
      },
      {
        model: db.ServiceForm,
      },
    ],
  });
  if (!details) return res.status(500).send("Something went wrong");
  if (details.length <= 0) res.status(200).send("No details found");
  else res.status(200).send(details);
};

module.exports = {
  createServiceDetails,
  updateServiceDetail,
  getServiceDetails,
};
