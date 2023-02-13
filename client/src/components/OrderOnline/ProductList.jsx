import React from "react";

// components
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h2
          id={props.target}
          className="bg-white top-0 w-full px-2 py-1 z-10 sticky text-xl font-semibold text-gray-800"
        >
          {props.name}
        </h2>
        <div className="flex flex-col gap-3">
          {props.items.map((each, index) => (
            <ProductItem key={index} _id={each} {...each} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
