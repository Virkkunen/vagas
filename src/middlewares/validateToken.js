const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret_token'; // chave secreta, vem do env ou valor padrão

const auth = (req, res, next) => {
  // recebe valor do header
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token não encontrado.' });

  try {
    // valida ao token
    const validatedToken = jwt.verify(token, secret);
    // salva no request
    req.user = validatedToken;
    // prossegue
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido ou expirado.' });
  }
};

module.exports = { auth };