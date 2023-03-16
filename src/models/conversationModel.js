const { DataTypes } = require("sequelize");
const db = require("../utils/dateBase");

const ConversationType = {
  PERSONAL: "Personal",
  GROUP: "Grupal",
};

const Conversation = db.define("conversations", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(30),
  },
  conversationType: {
    type: DataTypes.ENUM(Object.values(ConversationType)),
    defaultValue: ConversationType.PERSONAL,
    allowNull: false,
  },
});

module.exports = Conversation;
