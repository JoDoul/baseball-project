var express = require("express");
var router = express.Router();

router.get("/", async (req, res) => {
    try{
        let title = []

        for(let i=0; i<10; i++){
            title.push("dummy");
        }

        return res.render("main.html", {title: title});
    } catch(err){
        console.log(err);
    }
    
})

module.exports = router