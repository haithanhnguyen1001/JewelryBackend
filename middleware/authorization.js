const db = require("../models");
const User = db.User;

const getUserPermissions = async (username) => {
    const user = await User.findOne({
        where: { username : username }
    });
    let perms;
    perms = await db.Permission.findAll({
        include: [
            {
                model: db.UserGroup,
                where: {
                    id: user.UserGroupId
                },
                raw: true
            }
        ]
    })
    return perms;
}
const checkUserPermission = (requestPermission) => {
    return async (req, res, next) => {
        try{
            const userPermissions = await getUserPermissions(req.user.username);
            for(permission of userPermissions){
                if(permission.name == requestPermission)
                    return next();
            }
            return res.status(403).send("User doesnt have permission")
        }
        catch(err){
            console.log(err);
            return res.status(500).send("Something went wrong");
        }
    }
}

module.exports = { checkUserPermission };