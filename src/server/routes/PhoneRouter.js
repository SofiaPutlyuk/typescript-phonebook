const express = require("express")
const phoneController = require("../controller/phoneController")
const router = express.Router()
router.get("/" , phoneController.getPhone)
router.post("/" , phoneController.postUser)
module.exports = router