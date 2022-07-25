const { matchedData } = require("express-validator");
const { compare, encrypt } = require("../utils/handlePassword");
const { tokenSign, verifyToken } = require("../utils/handleJwt");
const { usersModel } = require("../models");
const handleHttpError = require("../utils/handleError");

const registerController = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password: password };
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_REGISTER_USER");
  }
};

const loginController = async (req, res) => {
  try {
    req = matchedData(req);

    const user = await usersModel.findOne({ email: req.email });

    if (!user) {
      handleHttpError(res, "USER_DON'T_EXIST", 404);
      return;
    }

    const hashPassword = user.get("password");
    const check = compare(req.password, hashPassword);

    if (!check) {
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return;
    }

    user.set("password", undefined, { strict: false });

    const data = {
      token: await tokenSign(user),
      user: user,
    };

    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
};

module.exports = { registerController, loginController };
