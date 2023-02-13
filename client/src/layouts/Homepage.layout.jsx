import React from "react";
import Navbar from "../components/Navbar";
import ProductTab from "../components/ProductTab";

const HomepageLayout =
  (Component) =>
    ({ ...props }) => {
      return (
        <>
          <Navbar />
          <ProductTab />
          <div className="container mx-auto px-4 lg:px-20">
            <Component {...props} />
          </div>
        </>
      );
    };

export default HomepageLayout;
