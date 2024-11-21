import getTodosPosts from "../model/postsmodel.js";

export async function listarTodosPosts(req, res) {        
    // Chama a função para buscar todos os posts
    const posts = await getTodosPosts();

    // Retorna os posts em formato JSON com status 200 (sucesso)
    res.status(200).json(posts);
};