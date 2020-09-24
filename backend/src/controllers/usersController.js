const usersRepository = require("../repositories/usersRepository");
const AppError = require("../errors/AppError");

exports.login = async (req, res, next) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return next(new AppError("O email ou a senha nao foram informados.", 400));
    }

    const foundUser = await usersRepository.findByEmail({ email });

    if (!foundUser) {
      return next(new AppError("O usuario com email informado nao foi encotrado.", 400));
    }

    if (foundUser.senha != senha) {
      return next(new AppError("As senhas nao batem.", 400));
    }

    return res.status(200).send({ foundUser });
  } catch {
    return next(new Error);
  }
};

exports.readUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const foundUser = await usersRepository.findById({ id });

    return res.status(200).send(foundUser);
  } catch (err) {
    return next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { nome, cpf, rg, nascimento, telefones, email, senha } = req.body;

    if (!nome || !cpf || !rg || !nascimento || !telefones || !email || !senha) {
      return next(new AppError("Alguns valores obrigatorios nao foram informados.", 400));
    }

    const userData = { nome, cpf, rg, nascimento, telefones, email, senha };

    const newUser = await usersRepository.createUser(userData);

    if (!newUser) {
      return next(new AppError("Nao foi possivel criar o usuario", 400));
    }

    return res.status(200).send(newUser);
  } catch (err) {
    return next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return next(new AppError("Id do usuario nao foi informado.", 400));
    }

    const updatedUser = await usersRepository.updateUser({
      id,
      body: req.body
    });

    if (!updatedUser._id) {
      return next(new AppError(updatedUser.message, 400));
    }

    return res.status(200).send(updatedUser);
  } catch (err) {
    return next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return next(new AppError("Id do usuario nao foi informado.", 400));
    }

    await usersRepository.deleteUser({ id });
    return res.status(200).send({ message: "Usuário deletado." });
  } catch (err) {
    return next(err);
  }
};