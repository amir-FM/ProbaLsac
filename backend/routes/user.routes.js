const router = require("express").Router();
const User = require("../models/user.models.js");

//http:/localhost:5000/api/user
//in req = request res = response
router.post("/", async(req, res) => {
    try {

        user = await User.findOne({email: req.body.email});
        if(user)return res.status(400).send({
            success: false,
            error: "Email already in use"
        });

        user = new User ({
            email: req.body.email,
            password: req.body.password
        });

        await user.save();
        return res.status(201).send({success: true});
    }catch (e){
        return res.send({success: false, message: e.message});
    }
});

router.get("/", async(_, res) =>{
    const usersData = await User.find();

    let trimmedUsersData =[];
    for(const user of usersData) {
        trimmedUsersData.push({
            email: user.email,
            date: user.date
        });
    }
    return res.status(200).send({success: true, data: trimmedUsersData});
});

router.post("/login", async(req, res) => {
    try {

        const userToLogin = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });

        if(userToLogin){
            res.cookie("token", userToLogin._id);
            return res.status(200).send({success: true, token: userToLogin._id});
        }

        return res.status(400).send({success: false});
    }catch (e){
        return res.send({success: false, message: e.message});
    }
});

module.exports = router;
