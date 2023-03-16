const MessageService = require("../services/messageService");
const UserConversationService = require("../services/userConversationService");

const createMessage = async (req, res, next) => {
  try {
    const { userConversationId, content } = req.body;
    const userConversation =
      await UserConversationService.getUserConversationByPk(userConversationId);
    if (!userConversation) {
      return next({
        status: 400,
        message: "No existe un registro con ese id",
        error: [],
      });
    }
    const data = { userConversationId, content };
    const newMessage = await MessageService.create(data);
    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};

const getListMessages = async (req, res, next) => {
  try {
    const listMessages = await MessageService.getListMessages();
    res.status(200).json(listMessages);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMessage,
  getListMessages,
};
