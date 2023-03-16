const Conversation = require("../models/conversationModel");
const Message = require("../models/messageModel");
const UserConversation = require("../models/userConversationModel");
const User = require("../models/userModel");

class ConversationService {
  static async create(data) {
    try {
      const newConversation = Conversation.create(data);
      return newConversation;
    } catch (error) {
      throw error;
    }
  }
  static async getListConversations() {
    try {
      const listConversations = await Conversation.findAll();
      return listConversations;
    } catch (error) {
      throw error;
    }
  }
  static async getConversationByPk(id) {
    try {
      const conversation = await Conversation.findByPk(id);
      return conversation;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const conversation = await Conversation.destroy({ where: { id } });
      return conversation;
    } catch (error) {
      throw error;
    }
  }
  static async getConversation(id) {
    try {
      const conversation = await Conversation.findByPk(id, {
        attributes: { exclude: ["title"] },
        include: [
          {
            model: UserConversation,
            attributes: {
              exclude: ["userId", "conversationId", "createdAt", "updatedAt"],
            },
            include: [
              {
                model: User,
                attributes: ["id", "username", "email"],
              },
              {
                model: Message,
                attributes: ["id", "content", "createdAt"],
              },
            ],
          },
        ],
      });
      return conversation;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ConversationService;
