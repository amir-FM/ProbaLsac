const router = require("express").Router();
const Poll = require("../models/poll.models.js");
const User = require("../models/user.models.js");

//http:/localhost:5000/api/user
//in req = request res = response
router.post("/", async(req, res) => {
    try {

        if(await Poll.findOne({title: req.body.title}))
            return res.status(400).send({
                success: false,
                error: "Poll with same title already exists"
            });

         const poll = new Poll ({
            title: req.body.title,
            author: req.body.author
        });

        for(const pick of req.body.pick)
            poll.pick.push(pick);

        await poll.save();
        return res.status(201).send({success: true});
    }catch (e){
        return res.send({success: false, message: e.message});
    }
});

router.get("/", async(_, res) =>{
    const pollData = await Poll.find();

    let trimmedPollData =[];
    for(const poll of pollData) {
        trimmedPollData.push({
            _id: poll._id,
            title: poll.title,
            pick1: poll.pick1.title,
            pick2: poll.pick2.title,
            pick3: poll.pick3.title
        });
    }
    return res.status(200).send({success: true, data: trimmedPollData});
});

router.delete("/:uid/:pollID", async(req, res) =>{
    try{
        const pollID = req.params.pollID;
        const userID = req.params.uid;

        const poll = await Poll.findOne({
            _id: req.params.pollID,
            author: req.params.uid
        });

        if(!poll)return res.status(404).send({
            success: false,
            error: "User doesn't own the poll or it doesn't exist"
        });

        await Poll.deleteOne(poll);

        return res.status(200).send({success: true});
    } catch (e){
        return res.send({success: false, message: e.message});
    }
});

router.patch("/", async(req, res) =>{
    try{
        const pollToUpdate = await Poll.findOne({
            _id: req.body.pollID,
            author: req.body.userID
        });

        if(!pollToUpdate)
            return res.status(400).send({
                success: false,
                error: "User does't own the poll or it doesn't exist"
            });

        pollToUpdate.set({
            title: req.body.title,
            pick1: req.body.pick1,
            pick2: req.body.pick2,
            pick3: req.body.pick3,
        });

        await pollToUpdate.save();
        return res.status(200).send({success: true});

    } catch (e){
        return res.send({success: false, message: e.message});
    }
});

router.post("/vote/:id", async(req, res) => {
    try{
        const poll = await Poll.findById(req.params.id);
        const user = req.body.userID;

        if(!user)
            return res.status(403).send({
                success: false,
                error: "Not logged in"
            })

        for(const pick of poll.pick){
            if(pick.voters.includes(user)){
                pick.voters.splice(pick.voters.indexOf(user), 1);
                pick.votes--;
            }
        }

        var i = 0;
        const length = poll.pick.length;

        while(i < length){
            if(req.body.votes[i]){
                poll.pick[i].votes++;
                poll.pick[i].voters.push(user);
            }
            i++;
        }
        await poll.save();

        return res.status(200).send({success: true});
    } catch (e){
        return res.status(400).send({success: false, message: e.message});
    }
});

module.exports = router;
