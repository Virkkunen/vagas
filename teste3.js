const data = require("./fakeData");

module.exports = function (req, res) {
    const { name } = req.query;

    // findIndex vai deixar ter uma confirmação que achou e deletou
    const userIndex = data.findIndex((person) => person.name === name);

    // se não achar o user, index é -1
    if (userIndex !== -1) {
        // remover user pelo índice
        data.splice(userIndex, 1);
        return res.status(204).end();
    }

    return res.status(404).json({ message: 'Pessoa não encontrada.' });
};