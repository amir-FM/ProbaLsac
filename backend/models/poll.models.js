const mongoose = require("mongoose");

const PollSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: String,
    pick: [{
        title: String,
        votes: {
            type: Number,
            default: 0
        },
        voters: [String]
    }],
    optionsNumber: {
        type: Number,
        default: 0
    }
});

const Poll = mongoose.model("Poll", PollSchema);

module.exports = Poll;
