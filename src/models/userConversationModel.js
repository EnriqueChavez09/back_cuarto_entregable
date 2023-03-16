const { DataTypes } = require("sequelize");
const db = require("../utils/dateBase");

const UserConversation = db.define("users_conversations", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  conversationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "conversation_id",
  },
});

module.exports = UserConversation;
