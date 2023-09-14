import React, { useState, useEffect } from "react";
import StoreCard from "../StoreCard";

// components
import DeliveryCarousel from "./DeliveryCarousel";

// redux
import { useSelector } from "react-redux";

const Delivery = () => {
  const [StoreList, setStoreList] = useState([]);

  const reduxState = useSelector(
    (globalState) => globalState.Store.Stores
  );

  useEffect(() => {
    reduxState && setStoreList(reduxState);
  }, [reduxState]);

  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Our Shops in Mumbai
      </h1>
      <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        {StoreList.map((Store) => (
          <StoreCard {...Store} key={Store._id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;