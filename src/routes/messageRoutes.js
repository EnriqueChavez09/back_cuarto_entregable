const { Router } = require("express");
const {
  createMessage,
  getListMessages,
} = require("../controllers/messageControllers");
const { createValidator } = require("../validators/messagesValidators");

const router = Router();

router.post("/api/v1/messages", createValidator, createMessage);
router.get("/api/v1/messages", getListMessages);

module.exports = router;
