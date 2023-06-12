const data = require("./data/fakeData");
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret_token'; // chave secreta, vem do env ou valor padrão

const getUser = (req, res, _next) => {
    const { name } = req.query;
    // usar hof para buscar pelo nome no banco fake
    const foundName = data.find((person) => person.name === name);
    // se achar, retorna a pessoa com status 200 (ok)
    if (foundName) {
        // cria o token, necessário para teste3 e teste4
        const token = jwt.sign(foundName, secret);
        foundName.read += 1; // para o teste 5
        return res.status(200).json({foundName, token})
    };
    // se não achar, retorna status 404 (not found) com mensagem
    return res.status(404).json({ message: 'Usuário não encontrado.' });

};

const getUsers = (req, res, next) => {
    // apenas retorna todos os dados
    res.status(200).json(data);
};

module.exports = {
    getUser,
    getUsers
};
