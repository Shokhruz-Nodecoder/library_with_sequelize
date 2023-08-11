const {Router} = require("express")
const { create } = require("../controllers/author.controller")
const router = Router()

router.post("/author", create)

module.exports = router