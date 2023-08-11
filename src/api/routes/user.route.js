const {Router} = require("express")
const { register, login } = require("../controllers/user.controller")
const router = Router()


router.post("/signup", register)
router.post("/signin", login)



module.exports = router