import conectarAoBanco from "../config/dbconfig.js";


// Conecta ao banco de dados MongoDB usando a string de conexão fornecida
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts da coleção "posts"
export default async function getTodosPosts() {

    // Obtém o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");

    // Obtém a coleção "posts"
    const colecao = db.collection("posts");

    // Retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
};
