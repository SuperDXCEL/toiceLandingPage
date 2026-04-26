const express = require('express')
const app = express()
const https = require("https")
const fs = require("fs")
const port = 3002;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

app.post("/email", (req, res) => {
  console.log(req.body, " just subscribed")
  fs.appendFileSync("emails.txt", req.body.email.toString() + "\n")
  res.sendStatus(200);
});

app.listen(port, '127.0.0.1', () => {
  console.log("WRAP IT UP")
});
