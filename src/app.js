const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/dateBase");
const initModel = require("./models/initModel");
const errorHandlerRouter = require("./routes/errorHandlerRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const conversationRoutes = require("./routes/conversationRoutes");
const userConversationRoutes = require("./routes/userConversationRoutes");
const messagesRoutes = require("./routes/messageRoutes")

initModel();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

db.authenticate()
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => console.log(error));

db.sync({ alter: false })
  .then(() => console.log("Base de datos sync"))
  .catch((error) => console.log(error));

app.use(authRoutes);
app.use(userRoutes);
app.use(conversationRoutes);
app.use(userConversationRoutes);
app.use(messagesRoutes);
errorHandlerRouter(app);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
