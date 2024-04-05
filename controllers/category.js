import { errorMessages, successMessages } from "../constants/message.js";
import Category from "../models/Category.js";

export const getCategories = async (req, res, next) => {
    try {
        const data = await Category.find({});
        if (data && data.length > 0) {
            return res.status(200).json({
                message: successMessages.GET_SUCCESS,
                data,
            });
        }
        return res.status(404).json({ message: errorMessages.GET_FAIL });
    } catch (error) {
        next(error);
    }
};
export const createCategory = async (req, res, next) => {
    try {
        const data = await Category.create(req.body);
        if (!data) {
            return res.status(400).json({ message: errorMessages.CREATE_FAIL });
        }
        return res.status(201).json({
            message: successMessages.CREATE_SUCCESS,
            data,
        });
    } catch (error) {
        next(error);
    }
};

export const getCategoryById = async (req, res, next) => {
    try {
        const data = await Category.findById(req.params.id).populate("products");
        if (!data) {
            return res.status(400).json({ message: errorMessages.GET_FAIL });
        }
        return res.status(201).json({
            message: successMessages.GET_SUCCESS,
            data,
        });
    } catch (error) {
        next(error);
    }
};

export const updateCategoryById = async (req, res, next) => {
    try {
        const data = await Category.findByIdAndUpdate(req.body, req.params.id, { new: true, });
        if (!data) {
            return res.status(400).json({ message: errorMessages.UPDATE_FAIL });
        }
        return res.status(201).json({
            message: successMessages.UPDATE_SUCCESS,
            data,
        });
    } catch (error) {
        next(error);
    }
};

export const removeCategoryById = async (req, res, next) => {
    try {

        const data = await Category.findByIdAndDelete(req.params.id);
        if (data) {
            return res.status(200).json({
                message: successMessages?.DELETE_SUCCESS || "Successfully!",
                data,
            });
        }
        return res.status(400).json({ message: errorMessages.DELETE_FAIL });
    } catch (error) {
        next(error);
    }
};

export const softRemoveCategoryById = async (req, res, next) => {
    try {
        const data = await Category.findByIdAndUpdate(req.params.id, { hide: true, }, { new: true, }
        );
        if (!data) {
            return res.status(400).json({ message: errorMessages.UPDATE_FAIL });
        }
        return res.status(201).json({
            message: successMessages.UPDATE_SUCCESS,
            data,
        });
    } catch (error) {
        next(error);
    }
};