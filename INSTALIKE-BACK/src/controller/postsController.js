import fs from "fs";
import { getTodosPosts, createNovoPost} from "../model/postsmodel.js";

export async function listarTodosPosts(req, res) {        
    // Chama a função para buscar todos os posts
    const posts = await getTodosPosts();

    // Retorna os posts em formato JSON com status 200 (sucesso)
    res.status(200).json(posts);
};

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await createNovoPost(novoPost);
        res.status(200).json(postCriado);
    } catch (error) {
        console.error("Erro em postarNovoPost() -> ", error.message);
        res.status(500).json({"erro": "falha na requisicao"});
    }
};

export async function uploadImage(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try {
        const postCriado = await createNovoPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);
    } catch (error) {
        console.error("Erro em postarNovoPost() -> ", error.message);
        res.status(500).json({"erro": "falha na requisicao"});
    }
};


