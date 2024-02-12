const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  var inputValue = req.body.operationType;
  let num1 = Number(req.body.values.num1);
  let num2 = Number(req.body.values.num2);
  let num3;
  if (inputValue == "add") {
    num3 = num1 + num2;
  }
  if (inputValue == "subtract") {
    num3 = Number(num1 - num2);
  }
  if (inputValue == "multiply") {
    num3 = Number(num1 * num2);
  }
  if (inputValue == "divide") {
    num3 = Number(num1 / num2);
  }
  res.json({ num3: num3 });
});

app.listen(3000, () => console.log("Server started !"));

//app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
