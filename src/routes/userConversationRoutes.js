const { Router } = require("express");
const {
  createUserConversation,
  getListUserConversations,
} = require("../controllers/userCoversationControllers");
const { createValidator } = require("../validators/userConversationValidators");

const router = Router();

router.post(
  "/api/v1/users_conversations",
  createValidator,
  createUserConversation
);
router.get("/api/v1/users_conversations", getListUserConversations);

module.exports = router;
