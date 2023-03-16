const { Router } = require("express");
const { getListUsers, getConversations } = require("../controllers/userControllers");

const router = Router();

router.get("/api/v1/users", getListUsers);
router.get("/api/v1/users/:id/conversations", getConversations);

module.exports = router;
