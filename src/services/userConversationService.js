const UserConversation = require("../models/userConversationModel");

class UserConversationService {
  static async create(data) {
    try {
      const newUserConversation = await UserConversation.create(data);
      return newUserConversation;
    } catch (error) {
      throw error;
    }
  }
  static async getListUserConversations(conversationId = null, userId = null) {
    try {
      let listUserConversations = await UserConversation.findAll();
      if (conversationId != null && userId != null) {
        listUserConversations = await UserConversation.findAll({
          where: { conversationId, userId },
        });
      }
      return listUserConversations;
    } catch (error) {
      throw error;
    }
  }
  static async getListUserConversationsByConversationId(conversationId) {
    try {
      const listUserConversations = await UserConversation.findAll({
        where: { conversationId },
      });
      return listUserConversations;
    } catch (error) {
      throw error;
    }
  }
  static async getUserConversationByPk(id) {
    try {
      const userConversation = await UserConversation.findByPk(id);
      return userConversation;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserConversationService;
