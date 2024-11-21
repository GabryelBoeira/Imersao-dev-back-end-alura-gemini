import express from "express";

const servidor = express();
servidor.use(express.json());
const porta = 3000;

const posts = [
    {
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150",
      id: 1
    },
    {
      descricao: "Gato brincando com um novelo de lã",
      imagem: "https://placecats.com/playful/500/300",
      id: 2
    },
    {
      descricao: "Gatinho dormindo em uma caixa",
      imagem: "https://placecats.com/sleepy/400/200",
      id: 3
    },
    {
      descricao: "Gato curioso olhando pela janela",
      imagem: "https://placecats.com/curious/600/400",
      id: 4
    },
    {
      descricao: "Gato tomando sol na varanda",
      imagem: "https://placecats.com/sunbathing/350/250",
      id: 5
    },
    {
      descricao: "Gato comendo ração",
      imagem: "https://placecats.com/eating/450/350",
      id: 6
    }
];

//iniciar servidor 
servidor.listen(porta, () => {
    console.log("servidor escutando");    
});

servidor.get("/", (req, res) => {
    res.status(200).send("Hello Wordl!!!");
});

servidor.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
}

servidor.get("/posts/:id", (req, res) => {
    let index = buscarPostPorID(req.params.id);    
    res.status(200).json(posts[index]);
});
