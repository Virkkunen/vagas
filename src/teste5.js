

module.exports = function (req, res) {
    const { id } = req.params;
    // se não receber id, retorna erro
    if (!id) return res.status(400).json({ message: 'Parâmetro "id" é necessário.' });

    const foundUser = data.find((person) => person.id === +id);

    if (foundUser) {
        return res.status(200).json({ message: `Usuário foi lido ${foundUser.read} vezes` });
    }
};