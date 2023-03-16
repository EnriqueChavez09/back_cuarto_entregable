const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createValidator = [
  check("userConversationId", "Error con el campo userConversationId")
    .exists()
    .withMessage("El userConversationId es obligatorio")
    .notEmpty()
    .withMessage("El userConversationId no debe estar vacio")
    .isInt()
    .withMessage("El userConversationId debe ser un entero"),
  check("content", "Error con el campo conversationId")
    .exists()
    .withMessage("El content es obligatorio")
    .notEmpty()
    .withMessage("El content no debe estar vacio")
    .isString()
    .withMessage("El content debe ser un string"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  createValidator,
};
