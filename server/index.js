const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser").json();
const rateLimit = require("express-rate-limit");
const { passesProfanityCheck } = require("./passesProfanityCheck");

const { Memory } = require("./db");

const MIN = 15 * 60 * 1000; // 15 minutes

const PORT = 8080;
const whitelist = [
    "https://features.dailybruin.com",
    "https://infallible-pare-141933.netlify.com"
];
const corsOptions = {
    origin: function(origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200
};
const limiter = rateLimit({
    windowMs: MIN,
    max: 45 // limit each IP to 100 requests per windowMs
});

app.use(bodyParser);
app.use(cors(corsOptions));

app.get("/:location", async (req, res) => {
    const { location } = req.params;
    console.log("Received GET request");
    let memories = await Memory.find({ location: location });
    memories = memories ? memories : [];
    res.json(memories);
});

app.post("", limiter, async (req, res) => {
    console.log("Received POST request");
    const { location, text } = req.body;
    if (!passesProfanityCheck(text)) {
        res.json([]);
        return;
    }
    let memory = await Memory.create({ location, text });
    res.json(memory);
});

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}!`);
});
