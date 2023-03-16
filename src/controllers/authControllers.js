const UserService = require("../services/userService");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await UserService.getUser(email);
    if (user) {
      return next({
        status: 400,
        message: "Ya existe el usuario con el email ingresado",
        error: [],
      });
    }
    const data = { username, email, password };
    const newUser = await UserService.create(data);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.getUser(email);
    if (!user) {
      return next({
        status: 400,
        message: "No existe el usuario con el email ingresado",
        error: "User not found",
      });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return next({
        status: 400,
        message: "La contraseña es incorrecta",
        error: "Invalid Password",
      });
    }
    const { id, username } = user;
    res.status(200).json({ id, username, email });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
