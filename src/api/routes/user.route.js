const {Router} = require("express")
const { register, login, update, newPassword } = require("../controllers/user.controller")
const router = Router()


router.post("/signup", register)
router.post("/signin", login)
router.put("/edit", update)
router.put("/repass", newPassword)
module.exports = router