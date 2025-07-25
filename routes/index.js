const express = require("express");
const router = express.Router();
router.get("/", function (req, res, next) {
  res.locals.pageData = {
    title: "ponsakorn Kutpromma",
    titleClass: "fs-3",
  };
  res.render("pages/index");
});
module.exports = router;
