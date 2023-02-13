import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Layout
import HomeLayout from "../layouts/Homepage.layout";

// components
import Delivery from "../components/Delivery";

// redux
import { useDispatch } from "react-redux";
import { getStore } from "../redux/reducers/Store/Store.action";

const Home = () => {
  const { type } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStore());
  }, []);

  return (
    <>
      <div className="my-5 mb-20 md:mb-10">
        {type === "delivery" && <Delivery />}
      </div>
    </>
  );
};

export default HomeLayout(Home);
