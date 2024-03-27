import User from "../models/User.js";
import { registerSchema } from "../validations/auth.js";
import bcryptjs from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body

    const { error } = registerSchema.validate(req.body, { abortEarly: false })

    if (error) {
      const errors = error.details.map(err => err.message)
      return res.status(400).json({
        message: error
      })
    }


    //  B2: Kiem tra email da ton tai chua?
    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
      return res.status(400).json({
        message: "Email da ton tai!"
      });
    }

    // B3: Ma hoa mat khau

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    // B4: Tao user moi

    const user = await User.create({ ...req.body, password: hashPassword });
    user.password = undefined;
    return res.status(201).json({
      message: "Dang ky thanh cong!",
      user,
    });

    
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const lognin = async (req, res) => {
  try {

  } catch (error) {

  }
};