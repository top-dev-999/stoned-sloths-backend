const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5005;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Method", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  next();
});

app.post("/api/email", (req, res, next) => {
  //if get email from client side
  //save email to file
  const email = req.body.email;
  fs.appendFile("email.txt", email + "\n", function (err) {
    if (err) {
      throw err;
    }
    console.log("Saved " + email);
    return res.send({
      type: "success",
    });
  });
});

app.listen(port);
