const { Op, fn, col, where } = require("sequelize");
const db = require("../models");
const { createReportDetails } = require("./reportdetail.controller");
const Report = db.Report;
const createReport = async (req, res) => {
  const { month, year, cart } = req.body;
  let result;
  try {
    result = await Report.create({ month, year });
    if (!result) {
      res.status(400).send("Couldn't create report");
      return;
    }
    response = {...result};
    const modifiedCart = cart.map((item) => {
      return {
        ReportId: result.id,
        ...item,
      };
    });
    const success = await createReportDetails(modifiedCart);
    if (!success) {
      console.log(success);
      res.status(400).send("Something went wrong");
      await result.destroy();
      return;
    }
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong when created Report");
  }
};

const getAllReport = async (req, res) => {
  let reports = await Report.findAll({
    include: [
      {
        model: db.ReportDetail,
        include: [
          {
            model: db.Product,
          },
          {
            model: db.ProductType,
          },
        ],
      },
    ],
  });
  if (reports) {
    if (reports.length <= 0) res.status(200).send("No reports found");
    else {
      res.status(200).send(reports);
    }
  } else {
    res.status(500).send("Something went wrong when finding report");
  }
};
module.exports = { createReport, getAllReport };
