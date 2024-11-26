import express from "express";
import multer from "multer";
import { buscarPostById, listarTodosPosts, postarNovoPost, uploadImage } from "../controller/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads" , storage});

const routes = (servidor) => {
    // Habilita o servidor a receber dados no formato JSON
    servidor.use(express.json());

    // Rota raiz que retorna uma mensagem de teste
    servidor.get("/", (req, res) => {
        res.status(200).send("Hello Wordl!!!");
    });

    // Rota para buscar todos os posts do banco de dados
    servidor.get("/posts", listarTodosPosts);
    
    //Rota para buscar um post pelo id
    servidor.get("/posts/:id", buscarPostById);

    //Rota para salvar um novo post
    servidor.post("/posts", postarNovoPost);

    //Rota para salvar um novo post
    servidor.post("/upload", upload.single("imagem"), uploadImage);

    //servidor.put("/posts/:id", upload.single("imagem"), uploadImage);

};

export default routes;
