import express from "express";

const servidor = express();
const porta = 3000;

//iniciar servidor 
servidor.listen(porta, () => {
    console.log("servidor escutando");    
});

servidor.get("/api", (req, res) => {
    res.status(200).send("Hello Wordl!!!");
});