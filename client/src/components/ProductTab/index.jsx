import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";
import classnames from "classnames";

const MobileTabs = () => {
  const [allTypes] = useState([
    {
      id: "delivery",
      icon: <RiShoppingBag3Line />,
      name: "Delivery",
    }
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="lg:hidden flex bg-white shadow-lg fixed bottom-0 z-10 w-full items-center justify-between md:justify-evenly text-gray-500 border">
        {allTypes.map((item) => (
          <Link key={item.id} to={`/${item.id}`} className="w-1/4">
            <div
              className={
                type === item.id
                  ? "flex items-center text-center flex-col relative text-xl text-zomato-400"
                  : "flex text-center flex-col items-center text-xl "
              }
            >
              <div
                className={
                  type === item.id
                    ? "w-full h-full border-t-2 border-zomato-400 flex flex-col items-center pt-3"
                    : "flex flex-col items-center pt-3"
                }
              >
                {item.icon}
              </div>
              <h5 className="text-sm pb-3">{item.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const LargeTabs = () => {
  const [allTypes] = useState([
    {
      id: "delivery",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      name: "Delivery",
      activeColor: "yellow",
    }
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="hidden lg:flex gap-14 container px-20 my-8 mx-auto">
        {allTypes.map((item) => (
          <Link key={item.id} to={`/${item.id}`} className="w-36">
            <div
              className={classnames(
                "flex items-center gap-3 pb-2 transition duration-700 ease-in-out",
                {
                  "border-b-2 border-zomato-500": type === item.id,
                }
              )}
            >
              <div
                className={classnames(
                  "w-16 h-16 bg-gray-100 p-4 rounded-full",
                  {
                    [`bg-${item.activeColor}`]: type === item.id,
                  }
                )}
              >
                <img
                  src={type === item.id ? item.imageActive : item.imageDefault}
                  alt={item.id}
                  className="w-full h-full"
                />
              </div>
              <h3
                className={
                  type === item.id
                    ? "text-md text-zomato-400"
                    : "text-md text-gray-700"
                }
              >
                {item.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const ProductTab = () => {
  return (
    <div>
      <MobileTabs />
      <LargeTabs />
    </div>
  );
};

export default ProductTab;
