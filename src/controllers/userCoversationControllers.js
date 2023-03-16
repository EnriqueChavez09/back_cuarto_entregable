const ConversationService = require("../services/conversationService");
const UserConversationService = require("../services/userConversationService");
const UserService = require("../services/userService");

const createUserConversation = async (req, res, next) => {
  try {
    const { userId, conversationId } = req.body;
    const user = await UserService.getUserByPk(userId);
    const conversation = await ConversationService.getConversationByPk(
      conversationId
    );
    const usersConversations =
      await UserConversationService.getListUserConversations(
        conversationId,
        userId
      );
    if (!user) {
      return next({
        status: 400,
        message: "No existe un usuario con ese id",
        error: [],
      });
    }
    if (!conversation) {
      return next({
        status: 400,
        message: "No existe una conversación con ese id",
        error: [],
      });
    }
    if (usersConversations.length > 0) {
      return next({
        status: 400,
        message: "Ya existe un registro con esos datos",
        error: [],
      });
    }
    const listUserConversations =
      await UserConversationService.getListUserConversationsByConversationId(
        conversationId
      );
    if (
      conversation.conversationType === "Personal" &&
      listUserConversations.length >= 2
    ) {
      return next({
        status: 400,
        message:
          "Solo se puede crear dos registros para la conversación de tipo Personal",
        error: [],
      });
    }
    const data = { userId, conversationId };
    const newUserConversation = await UserConversationService.create(data);
    res.status(201).json(newUserConversation);
  } catch (error) {
    next(error);
  }
};

const getListUserConversations = async (req, res, next) => {
  try {
    const listUserConversations =
      await UserConversationService.getListUserConversations();
    res.status(200).json(listUserConversations);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUserConversation,
  getListUserConversations,
};
