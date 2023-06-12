const jwt = require('jsonwebtoken');

// recebe secret do .env ou valor padrão
const secret = process.env.JWT_SECRET || 'secret_token';

// opcoes de tipo de algoritimo
// e validade do token
const options = {
  algorithm: 'HS256',
  expiresIn: '1 day',
}

const genToken = (user) => {
  const payload = {
    name: user.name,
    id: user.id,
  };
  return jwt.sign(payload, secret, options);
};

module.exports = { genToken };