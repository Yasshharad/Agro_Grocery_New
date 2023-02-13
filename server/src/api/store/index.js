import express from "express";

import { StoreModel } from "../../database/allModels";
import {
  ValidateStoreCity,
  ValidateSearchString,
} from "../../validation/Store.validation";

const Router = express.Router();

/**
 * Route     /
 * Des       Create new Store
 * Params    none
 * Access    Public
 * Method    POST
 */
Router.post("/", async (req, res) => {
  try {
    const Stores = await StoreModel?.create?.(req.body.Store);
    return res.status(200).json({ Stores });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
})

/**
 * Route     /
 * Des       Get all the restuarant details based on the city
 * Params    none
 * Access    Public
 * Method    GET
 */
Router.get("/", async (req, res) => {
  try {
    const { city } = req.query;

    // await ValidateStoreCity(req.query);

    const Stores = await StoreModel.find({ city });
    if (Stores.length === 0) {
      return res
        .status(404)
        .json({ error: "No Store found in this city." });
    }
    return res.json({ Stores });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /:_id
 * Des       Get individual restuarant details based on id
 * Params    _id
 * Access    Public
 * Method    GET
 */
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const Store = await StoreModel.findById(_id);

    if (!Store) {
      return res.status(400).json({ error: "Store not found" });
    }

    return res.json({ Store });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /search/:searchString
 * Des       Get Stores details based on search string
 * Params    searchString
 * Access    Public
 * Method    GET
 */
Router.get("/search/:searchString", async (req, res) => {
  try {
    const { searchString } = req.params;

    await ValidateSearchString(req.params);

    const Stores = await StoreModel.find({
      name: { $regex: searchString, $options: "i" },
    });

    if (!Stores.length === 0) {
      return res
        .status(404)
        .json({ error: `No Store matched with ${searchString}` });
    }

    return res.json({ Stores });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
