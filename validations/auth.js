import vine from "@vinejs/vine";

const registerSchema = vine.object({
  email: vine.string().email(),
  password: vine.string().minLength(6),
  username: vine.string().minLength(3).maxLength(64),
phoneNumber: vine.string().minLength(10).maxLength(11),
  avatar: vine.string(),
  address: vine.string()
});

export const validatorRegister = vine.compile(registerSchema);

const loginSchema = vine.object({
  email: vine.string().email(),
  password: vine.string().minLength(6),
});

export const validatorLogin = vine.compile(loginSchema);
