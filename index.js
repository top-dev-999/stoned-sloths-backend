const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
