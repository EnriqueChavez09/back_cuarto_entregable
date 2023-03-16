const { Router } = require("express");
const { register, login } = require("../controllers/authControllers");
const { registerValidator, loginValidator } = require("../validators/authValidators");

const router = Router();

router.post("/api/v1/auth/register", registerValidator , register);
router.post("/api/v1/auth/login", loginValidator , login);

module.exports = router;
