const mongoose = require("mongoose");

const memorySchema = mongoose.Schema(
    {
        location: { type: String, required: [true, "can't be blank"] },
        text: { type: String }
    },
    { strict: false }
);

let Memory = mongoose.model("Memory", memorySchema);

module.exports = Memory;
