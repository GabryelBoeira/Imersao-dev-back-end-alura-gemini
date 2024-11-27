import express from "express";
import postsRoute from "./src/routes/postsRoute.js";

// Cria uma instância do servidor Express
const servidor = express();

// Define a porta em que o servidor irá escutar
const porta = 3000;
servidor.use(express.static("uploads"));


// Inicia o servidor e escuta na porta definida
servidor.listen(porta, () => {
    console.log("servidor escutando");
});

postsRoute(servidor);
