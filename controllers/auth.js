import jwt from "jsonwebtoken";
import { errorMessages, successMessages } from "../constants/message.js";
import User from "../models/User.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";
import { JWT_SECRET } from "../utils/env.js";


export const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const checkEmail = await User.findOne({ email: email });
    if (checkEmail) {
      return res.status(400).json({ message: errorMessages.EMAIL_EXIST });
    }

    const hashPass = await hashPassword(password);

    const user = await User.create({ ...req.body, password: hashPass });
    user.password = undefined;

    return res.status(201).json({
      message: successMessages.REGISTER_SUCCESS,
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;


    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: errorMessages.EMAIL_NOT_FOUND });
    }

    if (!(await comparePassword(password, userExist.password))) {
      return res.status(400).json({ message: errorMessages.INVALID_PASSWORD });
    }

    const token = jwt.sign({ id: userExist._id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    userExist.password = undefined;
    return res.status(201).json({
      message: successMessages.LOGIN_SUCCESS,
      token,
      user: userExist,
    });
  } catch (error) {
    next(error);
  }
};