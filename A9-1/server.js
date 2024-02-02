const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

// Test client load
const path = require('path');
app.get('/', function (req, resp) {
    let filepath = path.join(__dirname, '/test-client.html');
    resp.sendFile(filepath);
});

// A9-1 Requirements
const database = require('./db.json');
app.post('/ask', function (req, resp) {
    let question = req.body.question;
    if (!question || !question.endsWith("?"))
        resp.json("You've gotta ask a question. Like, really.");
    else {
        let index = Math.floor(Math.random() * database.answers.length);
        let answer = database.answers[index];
        resp.json(answer);
    }
});

const port = 12345;
app.listen(port, function () {
    console.log(`Server listening on port: ${port}`);
});