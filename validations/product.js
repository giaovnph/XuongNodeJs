import vine from "@vinejs/vine";

const productSchema = vine.object({
    title: vine.string().minLength(3).maxLength(255),
    price: vine.number().min(0),
    description: vine.string().minLength(3),
    hide: vine.boolean(),
    discountPercentage: vine.number().min(0).max(100),
    rating: vine.number().min(0).max(5),
    stock: vine.number().min(0),
    brand: vine.string().minLength(3).maxLength(255),
    category: vine.string().minLength(3).maxLength(255),
    thumbnail: vine.string(),
})

export const validatorProduct = vine.compile(productSchema) 