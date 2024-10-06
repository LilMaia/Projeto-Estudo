const express = require("express");
const helmet = require("helmet");
const sequelize = require("./db.js");
const gameRoutes = require("./routes/gameRoutes.js");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(helmet());
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Game API",
      version: "1.0.0",
      description: "API para gerenciamento de jogos",
      contact: {
        name: "Rafael",
      },
      servers: [{ url: "http://localhost:3000" }],
    },
  },
  apis: ["./routes/*.js"],
};

app.use((req, res, next) => {
  const allowedHeaders = [
    "Accept",
    "Accept-Language",
    "Content-Language",
    "Content-Type",
    "Authorization",
    "verify-token",
  ];

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", allowedHeaders.join(", "));
  next();
});

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(gameRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.error("Erro ao iniciar o servidor:", err);
  } else {
    console.log(`Servidor está rodando na porta ${PORT}`);
  }
});

sequelize.sync().then(
  () => {
    console.log("Conectado ao banco de dados");
  },
  (error) => {
    console.error("Erro ao conectar ao banco de dados");
  }
);

