const { Router } = require("express");
const {
  createConversation,
  getListConversations,
  deleteConversation,
  getConversation,
} = require("../controllers/conversationControllers");
const {
  createValidator,
  deleteValidator,
} = require("../validators/conversationValidators");

const router = Router();

router.post("/api/v1/conversations", createValidator, createConversation);
router.get("/api/v1/conversations", getListConversations);
router.get("/api/v1/conversations/:id", getConversation);
router.delete("/api/v1/conversations/:id", deleteValidator, deleteConversation);

module.exports = router;
