const express = require("express");
const app = express();
const port = 3000;

let momentaryRisk = 0;
let maximumDailyLoss = 0;
let maximumAccountLoss = 0;
let profitEarned = 0;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/updateValues/:percentage/:profitEarned", (req, res) => {
  momentaryRisk = req.params.percentage;
  profitEarned = req.params.profitEarned;
  res.send({
    momentaryRisk: req.params.percentage,
    profitEarned: req.params.profitEarned,
  });
});

app.get("/getValues", (req, res) => {
  res.json({
    momentaryRisk: momentaryRisk,
    profitEarned: profitEarned,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
