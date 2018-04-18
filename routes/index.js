var express = require("express");
var router = express.Router();

/*
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Express"
  });
});

router.get("/forms-:number(\\d+)", (req, res, next) => {
  console.log(req.query.level);
  console.log(req.params.number);
});

router.post("/forms-:username", (req, res) => {
  console.log(req.body.username);
});

router.get(
  "/superMiddleware",
  (req, res, next) => {
    console.log("hello middleware");
    next();
  },
  (req, res, next) => {
    res.send("Hello World");
  }
);
*/
module.exports = router;
