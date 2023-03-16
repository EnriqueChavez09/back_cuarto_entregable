const { Sequelize } = require("sequelize");
const dataBase = new Sequelize(
  "postgres://postgres:secretsecret@localhost:5432/cuarto_entregable",
  {
    logging: false,
  }
);

module.exports = dataBase;
