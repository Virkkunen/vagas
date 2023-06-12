const data = require("./data/fakeData");

// usar axios será um ótimo jeito de otimizar esse código,
// porém não sei se para esse teste é permitido
// importar módulos externos/extras

const getUser = (req, res, _next) => {
    const { name } = req.query;
    // usar hof para buscar pelo nome no banco fake
    const foundName = data.find((person) => person.name === name);
    // se achar, retorna a pessoa com status 200 (ok)
    if (foundName) {
        foundName.read += 1; // para o teste 5
        return res.status(200).json(foundName)
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
