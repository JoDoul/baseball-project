var express = require("express");
var router = express.Router();

router.get("/", async (req, res) => {
    return res.render("main.html");
})

module.exports = router