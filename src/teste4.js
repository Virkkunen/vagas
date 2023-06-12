const data = require("./fakeData");

module.exports = function (req, res) {
    const { id } = req.query;
    const { name, job } = req.body;

    // o + no id converte de string pra number
    const foundUser = data.find((person) => person.id === +id);

    // se achar o user, atualiza
    if (foundUser) {
        foundUser.name = name;
        foundUser.job = job;
        return res.status(200).json(foundUser);
    }

    return res.status(404).json({ message: 'Usuário não encontrado.' });
};