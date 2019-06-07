const mongoose = require("mongoose");
const Memory = require("./Memory");

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on("connected", () => {
    console.log("Mongoose default connection open to " + process.env.MONGO_URL);
});

// If the connection throws an error
mongoose.connection.on("error", err => {
    console.log("Mongoose default connection error: " + err);
});

module.exports = {
    Memory
};
