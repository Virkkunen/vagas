const { z } = require('zod');

// cria schema pra validar infos
const updateUserInfoSchema = z.object({
  // valores de min e max arbitrários
  name: z.string().min(1).max(50),
  job: z.string().min(1).max(50),
});

const validateUpdateUser = (req, res, next) => {
  try {
    const validateBody = updateUserInfoSchema.parse(req.body);
    req.validatedBody = validateBody;
    // se tudo validar, segue em frente
    next();
  } catch (err) {
    // se não, retorna erro
    return res.status(400).json({ message: 'Dados inválidos' });
  }
};

module.exports = {validateUpdateUser};