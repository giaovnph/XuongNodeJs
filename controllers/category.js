import Category from "../models/Category.js";

const CategoryController = {
    getCategory: async (req, res) => {
        try {
            const data = await Category.find(req.query)
            res.json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getCategoryById: async (req, res) => {
        try {
            const data = await Category.findById(req.params.id)
            res.json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    postCategory: async (req, res) => {
        try {
            const data = await Category.create(req.body)
            res.json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateCategory: async (req, res) => {
        try {
            const data = await Category.findByIdAndUpdate(req.params.id, req.body,{
                new:true
            })
            res.json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    removeCategory: async (req, res) => {
        try {
            const data = await Category.findByIdAndDelete(req.params.id)
            res.json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    softRemoveCategory: async (req, res) => {
        try {
            const data = await Category.findByIdAndUpdate(req.params.id, {
                hide: true
            }, {
                new: true
            }

            )
            res.json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    }

}
export default CategoryController