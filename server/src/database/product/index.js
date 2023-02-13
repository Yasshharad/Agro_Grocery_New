import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    descript: { type: String, required: true },
    isVeg: { type: Boolean, required: true },
    isContainsEgg: { type: Boolean, required: true },
    category: { type: String, required: true },
    photos: {
      type: mongoose.Types.ObjectId,
      ref: "images",
    },
    price: { type: Number, default: 50, required: true },
    addOns: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Products",
      },
    ],
    Store: {
      type: mongoose.Types.ObjectId,
      ref: "Stores",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = mongoose.model("Products", ProductSchema);
