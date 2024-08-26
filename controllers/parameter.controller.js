const db = require('../models')

const Parameter = db.Parameter;

const createParameter = async (req, res) => {
    const {id, name, value} = req.body;
    if(!name || !value)
        res.status(500).send("Please provide name and value");
    
    let result;
    result = await Parameter.findOne({
        where : {
            name: name
        }
    })
    if(result){
    return res.status(409).send("Parameter is already exists");
    }
    result = await Parameter.create({ id, name, value});
    if(!result)
        return res.status(500).send("Something went wrong");
    res.status(200).send("New Parameter created");
}

const getParameter = async (req, res) => {
    let result;
    try {
        result = await Parameter.findOne({
            where: {
                name: "minPrePaid"
            }
        });
        console.log(result);
        if (result) {
            res.status(200).send(result);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateParameter = async (req, res) => {
    const id = req.params.id;
    const newValue = req.body.value;
    let result;
    try {
        result = await Parameter.findOne({
            where: {
                name: "minPrePaid"
            }
        });
        if (result) {
            console.log("parameter befor", result)
            
            result.value = newValue;
            await result.save();
            console.log("parameter save", result)
            res.status(200).send(result);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {createParameter, getParameter, updateParameter}