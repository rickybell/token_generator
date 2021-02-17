import express from "express";
import bodyParser from "body-parser";
import tokenGenerator from "./tokenGenerator";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/get_token", (req, res) => {
    const body = req.body;
    console.log("req.body", req.body);
    if (
        req.body.app_id &&
        req.body.certificate &&
        req.body.channel &&
        req.body.uid
    ) {
        res.json({ token: tokenGenerator(req.body) });
    } else {
        res.sendStatus(500);
    }
});

app.listen(3001, () => console.log("Example app listening on port 3001!"));
