const data = require("./fakeData");

// o erro é que estava escrito jov ao invés de job,
// mas aproveitei pra arrumar algumas coisas,
// como não usar var e adicionar id no user

module.exports = function (req, res) {
    const { name, job } = req.body;

    // falta o id
    const newUser = {
        id: data.length + 1,
        name: name,
        job: job,
    }

    data.push(newUser)

    res.status(200).json(newUser);
};