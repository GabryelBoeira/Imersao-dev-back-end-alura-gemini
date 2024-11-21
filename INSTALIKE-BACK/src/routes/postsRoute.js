import express from "express";
import { listarTodosPosts } from "../controller/postsController.js";

const routes = (servidor) => {
    // Habilita o servidor a receber dados no formato JSON
    servidor.use(express.json());

    // Rota raiz que retorna uma mensagem de teste
    servidor.get("/", (req, res) => {
        res.status(200).send("Hello Wordl!!!");
    });

    // Rota para buscar todos os posts do banco de dados
    servidor.get("/posts", listarTodosPosts);
};

export default routes;
