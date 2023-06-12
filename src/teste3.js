const data = require("./data/fakeData");

module.exports = function (req, res) {
    // header Authorization vem do GET /user?name=...
    const { id } = req.params;

    // findIndex vai deixar ter uma confirmação que achou e deletou
    const userIndex = data.findIndex((person) => person.id === +id);

    // se não achar o user, index é -1
    if (userIndex !== -1) {
        // remover user pelo índice
        data.splice(userIndex, 1);
        return res.status(204).end();
    }

    return res.status(404).json({ message: 'Usuário não encontrado.' });
};