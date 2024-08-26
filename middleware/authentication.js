//importing modules
const jwt = require('jsonwebtoken')
const db = require("../models");
//Assigning db.users to User variable
const User = db.User;

//Function to check if username already exist in the database
//this is to avoid having two users with the same username
const saveUser = async (req, res, next) => {
//search the database to see if user exist
    try {
        const username = await User.findOne({
            where: {
                username: req.body.username,
            },
        });
        if (username) {
            return res.status(409).send("Username already taken");
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send("Sign up failed.")
    }
};
const checkCookie = (req) => {
    return req.cookies['jwt']
}
const verifyAccessToken = async (req, res, next) => {
    let token;
    //authenticate through Bearer token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(' ')[1]
    }
    //authenticate through cookie
    else {
        token = req.headers["x-access-token"] || checkCookie(req) || null;
    }
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const user = await User.findOne({
            where: {
                token: token,
            },
        });
        if(!user){
            return res.status(401).send("Authorization error");
        }
        const decodedUser = jwt.verify(token, process.env.secretKey);
        if(user.username != decodedUser.username){
            return res.status(401).send("Invalid Token");
        }
        req.user = decodedUser;
    } catch (err) {
        console.log(err);
        return res.status(401).send("Invalid Token");
    }
    next();
}
//exporting module
module.exports = { saveUser, verifyAccessToken };