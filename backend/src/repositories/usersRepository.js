const mongoose = require("mongoose");

const User = mongoose.model("User");

exports.findByEmail = async ({ email }) => {
  const foundUser = await User
    .findOne({ email })
    .catch((error) => {
      return error;
    });

  return foundUser;
};

exports.findById = async ({ id }) => {
  const foundUser = await User
    .findById(id)
    .catch((error) => {
      return error;
    });

  return foundUser;
};

exports.createUser = async ({ nome, cpf, rg, nascimento, telefones, email, senha }) => {
  const userData = { nome, cpf, rg, nascimento, telefones, email, senha };

  let foundUser;
  foundUser = await User.findOne({ cpf });

  if (foundUser) {
    return undefined;
  }

  foundUser = await User.findOne({ rg });
  if (foundUser) {
    return undefined;
  }

  foundUser = await User.findOne({ email });
  if (foundUser) {
    return undefined;
  }

  const newUser = new User(userData);
  await newUser
    .save()
    .catch((err) => {
      return err;
    });

  return newUser;
};

exports.updateUser = async ({ id, body }) => {
  const filter = { _id: id };
  const updatedData = { ...body };
  const updatedUser = await User
    .findOne(filter)
    .catch((err) => {
      return { message: "Nao foi encontrado o usuario com o id informado", err };
    });

  Object.assign(updatedUser, updatedData);

  await updatedUser
    .save()
    .catch((err) => {
      return { message: "Nao foi possivel salvar o usuario.", err };
    });

  return updatedUser;
};

exports.deleteUser = async ({ id }) => {
  await User.findOneAndDelete({ _id: id });
};