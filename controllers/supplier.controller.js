const db = require('../models')

const Supplier = db.Supplier;

const getAllSuppliers = async (req, res) => {
  const Suppliers = await Supplier.findAll();
  if (Suppliers) {
    if (Suppliers.length <= 0) res.status(200).send("No supplier found");
    else {
      res.status(200).send(Suppliers);
    }
  }
}

const createSupplier = async (req, res) => {
  const { name, address, phone } = req.body;
  let result;
  if (!name || !phone || !address) { res.status(400).send("Please provide name, phone number and address") };
  result = await Supplier.findOne({
    where : {
        name: name
    }
  })
  if(result){
    return res.status(409).send("Supplier is already exists");
  }
  result = await Supplier.create({
    name, address, phone
  });
  if (result) {
    console.log("new Supplier created");
    res.status(200).send(result);
  }
  else {
    res.status(500).send("Something went wrong")
  }
}

const updateSupplier = async (req, res) => {
  const { name, address, phone } = req.body;
  const updateId = req.params.id;
  let duplicate = await Supplier.findOne({
    where: {
      name: name,
    }
  });
  if (duplicate) {
    res.status(400).send("Duplicate name");
    return;
  }
  let updatedSupplier = await Supplier.findByPk(updateId);
  if (updatedSupplier) {
    updatedSupplier.name = name ? name : updatedSupplier.name;
    updatedSupplier.address = address ? address : updatedSupplier.address;
    updatedSupplier.phone = phone ? phone : updatedSupplier.phone;
    await updatedSupplier.save();
    console.log(`Supplier ${updateId} updated succesfully.`);
    res.status(200).send(updatedSupplier);
  }
  else {
    res.status(400).send("Supplier not found.");
  }
}

const deleteSupplier = async (req, res) => {
  const id = req.params.id;
  try {
    let result = await Supplier.findByPk(id);
    if (result) {
      await result.destroy();
      res.status(200).send("supplier deleted");
    } else {
      res.status(404).send("supplier not found")
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong")
  }
}

module.exports = { getAllSuppliers, createSupplier, updateSupplier, deleteSupplier }