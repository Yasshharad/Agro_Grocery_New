import express from "express";

import { ProductModel } from "../../database/allModels";
import {
  validateCategory,
  validateId,
} from "../../validation/common.validation";

const Router = express.Router();

/**
 * Route     /:_id
 * Des       Create New Product Item
 * Params    none
 * Access    Public
 * Method    POST
 */
Router.post("/", async (req, res) => {
  try {
    const Products = await ProductModel.create(req.body.ProductItem);
    return res.status(200).json({ Products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
})


/**
 * Route     /:_id
 * Des       Get Product based on id
 * Params    _id
 * Access    Public
 * Method    GET
 */
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    await validateId(req.params);

    const Product = await ProductModel.findById(_id);
    return res.json({ Product });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /r/:_id
 * Des       Get all Product based on particular Store
 * Params    _id
 * Access    Public
 * Method    GET
 */
Router.get("/r/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    await validateId(req.params);

    const Products = await ProductModel.find({
      Store: _id,
    });

    if (!Products)
      return res
        .status(404)
        .json({ error: `no Product found with this id: ${_id}` });

    return res.json({ Products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /c/:category
 * Des       Get all Product based on particular category
 * Params    category
 * Access    Public
 * Method    GET
 */
Router.get("/c/:category", async (req, res) => {
  try {
    const { category } = req.params;
    await validateCategory(req.params);
    const Products = await ProductModel.find({
      category: { $regex: category, $options: "i" },
    });

    if (!Products)
      return res
        .status(404)
        .json({ error: `No Product matched with ${category}` });

    return res.json({ Products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
