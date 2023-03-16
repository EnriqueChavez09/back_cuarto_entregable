const Conversation = require("../models/conversationModel");
const Message = require("../models/messageModel");
const UserConversation = require("../models/userConversationModel");
const User = require("../models/userModel");

class MessageService {
  static async create(data) {
    try {
      const newMessage = await Message.create(data);
      return newMessage;
    } catch (error) {
      throw error;
    }
  }
  static async getListMessages() {
    try {
      const listMessages = await Message.findAll({
        attributes: ["id","content", "createdAt"],
        include: [
          {
            model: UserConversation,
            attributes: ["id"],
            include: [
              {
                model: User,
                attributes: ["id", "username", "email"],
              },
              {
                model: Conversation,
                attributes: ["id", "conversationType"],
              },
            ],
          },
        ],
      });
      return listMessages;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MessageService;
