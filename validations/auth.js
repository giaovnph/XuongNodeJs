import Joi from "joi";

export const registerSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().min(6).required(),
  username: Joi.string().min(6),
  phoneNumber: Joi.string().min(10).max(11),
  avatar: Joi.string(),
  address: Joi.string(),
})

export const logninSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().min(6).required(),
})

