const express = require('express')
const app = express()
const fs = require("fs")
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.post("/email", (req, res) => {
  console.log(req.body, " just subscribed")
  fs.appendFileSync("emails.txt", req.body.email.toString() + "\n")
});

app.listen(port)
