const db = require('../models')

const Unit = db.Unit

const getAllUnits = async (req, res) => {
  const Units = await Unit.findAll();
  // console.log(Units);
  if (Units) {
    if (Units.length <= 0) res.status(200).send("No Unit found");
    else {
      res.status(200).send(Units);
    }
  }
}

const createUnit = async (req, res) => {
  const { name } = req.body;
  let result;
  if (!name) { res.status(400).send("Please provide name and price, stock will be automatically set to 0.") }
  const duplicate = await Unit.findOne({
    where: {
      name: name
    }
  });
  if (duplicate) {
    console.log("duplicate record found");
    res.status(200).send("Name already exists");
    return;
  }
  result = await Unit.create({
    name
  });
  if (result) {
    console.log("new Unit created");
    res.status(200).send(result);
  }
  else {
    res.status(500).send("Something went wrong")
  }
}

const getWithId = async (req, res) => {
  const toFindId = req.params.id;
  try {
    const result = await UnitTypes.findByPk(toFindId);
    if (result) {
      console.log(`Unit with id ${toFindId} found.`);
      res.status(200).send(result);
    }
    else {
      res.status(200).send("Unit type couldn't be found");
    }
  } catch (error) {
    res.status(500).send("Something went wrong")
  }
}

const updateUnit = async (req, res) => {
  const { name } = req.body;
  const duplicate = await Unit.findOne({
    where: {
      name: name
    }
  });
  if (duplicate) {
    console.log("duplicate record found");
    res.status(400).send("Name already exists");
    return;
  }
  const updateId = req.params.id;
  let unit = await Unit.findByPk(updateId);
  if (unit) {
    unit.name = name ? name : unit.name;
    await unit.save();
    console.log(`Unit ${updateId} updated succesfully.`);
    res.status(200).send(unit);
  }
  else {
    res.status(400).send("Unit not found.");
  }
}

const deleteUnit = async (req, res) => {
  const id = req.params.id;
  try {
    let result = await Unit.findByPk(id);
    if (result) {
      await result.destroy();
      res.status(200).send("Unit deleted")
    } else {
      res.status(400).send("Unit not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
}


module.exports = { getAllUnits, createUnit, getWithId, updateUnit,deleteUnit }