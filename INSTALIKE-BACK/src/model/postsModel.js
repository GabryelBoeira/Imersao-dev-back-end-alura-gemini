import 'dotenv/config';
import { ObjectId } from 'mongodb';
import conectarAoBanco from "../config/dbconfig.js";

// Conecta ao banco de dados MongoDB usando a string de conexão fornecida
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts da coleção "posts"
export async function getTodosPosts() {

    // Obtém o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");

    // Obtém a coleção "posts"
    const colecao = db.collection("posts");

    // Retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
};

export async function createNovoPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
};

export async function getPostPorId(id) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.findOne({ _id: ObjectId.createFromHexString(id)});
};

export async function atualizarPost(id, post) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");


    return colecao.updateOne({ _id: ObjectId.createFromHexString(id)}, {$set: post});
};
