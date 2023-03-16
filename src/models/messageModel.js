const { DataTypes } = require("sequelize");
const db = require("../utils/dateBase");

const Message = db.define("messages", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userConversationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_conversation_id",
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Message;