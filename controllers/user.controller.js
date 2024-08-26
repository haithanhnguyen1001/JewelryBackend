const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = db.User;

const signup = async (req, res) => {
    try{
        const { username, password } = req.body;
        if(!username || !password)
            return res.status(400).send("Missing username or password.");
        let token = jwt.sign({ username }, process.env.secretKey, {
            expiresIn: process.env.expiresIn,
        });
        const information = {
            username,
            password: await bcrypt.hash(password, 10),
            token,
        };
        const user = await User.create(information);
        if(!user){
            return res.status(409).send("Sign up failed. Please try again.");
        }
        res.cookie("jwt", token, { maxAge: process.env.cookieAge, httpOnly: true });
        return res.status(201).send({user, token});
    }
    catch(error){
        console.log(error);
        return res.status(401).send(error);
    }
}

const login = async (req, res) => {
    try{
        const { username, password } = req.body;
        if(!username || !password)
            return res.status(400).send("Missing username or password");
        const user = await User.findOne({
            where:{
                username: username
            }
        })
        if(!user){
            return res.status(401).send("Wrong username or password");
        }
        const isValid = await bcrypt.compare(password, user.password); 
        if(!isValid){
            return res.status(401).send("Wrong username or password");
        }
        let token = jwt.sign({ username }, process.env.secretKey, {
            expiresIn: process.env.expiresIn,
        });
        user.token = token;
        await user.save();
        res.cookie("jwt", token, { maxAge: process.env.expiresIn, httpOnly: true, sameSite: 'None', secure: 'true' });
        return res.status(201).send({user, token});
    }
    catch(error){
        console.log(error);
        return res.status(401).send(error);
    }
}

const logout = async (req, res) => {
    try{
        const username = req.user.username;
        let user = await User.findOne( {
            where: {username: username}
        } );
        user.token = "";
        await user.save();
        return res.status(200).send("Logged out succesful");
    }
    catch(err){
        console.log(err);
        return res.status(500).send(err);
    }
};
module.exports = { signup, login, logout };