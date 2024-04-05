import vine from "@vinejs/vine";

const categorySchema = vine.object({
  name: vine.string().minLength(3).maxLength(255),
  slug: vine.string().minLength(3).maxLength(255),
  description: vine.string().minLength(3),
  isHidden: vine.boolean(),
});

export const validatorCategory = vine.compile(categorySchema) ;
