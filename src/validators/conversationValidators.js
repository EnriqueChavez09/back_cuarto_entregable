const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createValidator = [
  check("title", "Error con el campo title")
    .exists()
    .withMessage("El title es obligatorio")
    .notEmpty()
    .withMessage("El title no debe estar vacio")
    .isString()
    .withMessage("El title debe ser un string")
    .isLength({ min: 6, max: 30 })
    .withMessage("El title debe tener entre 6 y 30 caracteres"),
  check("conversationType", "Error con el campo conversationType")
    .exists()
    .withMessage("El conversationType es obligatorio")
    .notEmpty()
    .withMessage("El conversationType no debe estar vacio")
    .isString()
    .withMessage("El conversationType debe ser un string"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const deleteValidator = [
  param("id").isInt().withMessage("El id debe ser un entero"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  createValidator,
  deleteValidator,
};
