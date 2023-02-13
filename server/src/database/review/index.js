import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema(
  {
    Product: { type: mongoose.Types.ObjectId, ref: "Products" },
    Store: { type: mongoose.Types.ObjectId, ref: "Stores" },
    user: { type: mongoose.Types.ObjectId, ref: "users" },
    rating: { type: Number, required: true },
    reviewText: { type: String, required: true },
    isStoreReview: Boolean,
    isProductReview: Boolean,
    photos: {
      type: mongoose.Types.ObjectId,
      ref: "images",
    },
  },
  {
    timestamps: true,
  }
);

export const ReviewModel = mongoose.model("reviews", ReviewSchema);
