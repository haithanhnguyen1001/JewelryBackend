const db = require("../models");

const ServiceType = db.ServiceType;

const getAllServiceTypes = async (req, res) => {
  const serviceTypes = await ServiceType.findAll();
  if (serviceTypes) {
    if (serviceTypes.length <= 0)
      res.status(200).send("No service types found");
    else {
      res.status(200).send(serviceTypes);
    }
  }
};

const updateServiceType = async (req, res) => {
  const serviceId = req.params.id;
  const { name, price } = req.body;
  let duplicate = await ServiceType.findOne({
    where: {
      name: name,
    }
  });
  if (duplicate) {
    res.status(400).send("Duplicate name");
    return;
  }
  
  const serviceType = await ServiceType.findByPk(serviceId)
    .then((serviceType) => {
      serviceType.name = name ? name : serviceType.name;
      serviceType.price = price ? price : serviceType.price;
      serviceType.save();
      res.status(200).send(serviceType);
    })
    .catch((err) => {
      console.log("Something went wrong: ", err);
      res.status(500).send("Something went wrong");
    })
    .finally(() => {
      console.log(`Service type with id ${serviceId} updated successfully`);
    });
};

const addServiceType = async (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    res.status(400).send("Please provide name, price");
  }
  const duplicate = await ServiceType.findOne({
    where: {
      name: name
    }
  });
  if (duplicate) {
    console.log("duplicate record found");
    res.status(200).send("Name already exists");
    return;
  }
  const newType = await ServiceType.create({
    name,
    price,
  })
    .then((newType) => {
      console.log("New service type created");
      res.status(200).send(newType);
    })
    .catch((err) => {
      console.log("Something went wrong", err);
      res.status(500).send("Something went wrong");
    });
};

const getServiceTypeById = async (req, res) => {
  const serviceId = req.params.id;
  const serviceType = await ServiceType.findByPk(serviceId)
  .then((service) => {
    console.log("Service found");
    res.status(200).send(service);
  }).catch(err => {
    console.log("Something went wrong", err);
    res.status(500).send("Something went wrong");
  });
}

const deleteServiceType = async (req, res) => {
  const id = req.params.id;
  try {
    let result = await ServiceType.findByPk(id);
    if (result) {
      await result.destroy();
      res.status(200).send("service deleted");
    } else {
      res.status(404).send("service not found")
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong")
  }
}

module.exports = { getAllServiceTypes, updateServiceType, addServiceType, getServiceTypeById, deleteServiceType };
