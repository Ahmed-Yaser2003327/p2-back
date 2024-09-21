const { Router } = require("express");

const router = Router()
const user = require("../Controller/User-Controller")

router.get("/getUser",user.getUser)
router.post("/adduser",user.valid,user.addUser)

module.exports = router

//!............................
