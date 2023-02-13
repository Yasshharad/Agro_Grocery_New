import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/reducers/Product/Product.action";
import { getImage } from "../../redux/reducers/image/image.action";
import { addToCart } from "../../redux/reducers/cart/cart.action";

const ProductItem = (props) => {
  const [Product, setProduct] = useState({});
  const dispatch = useDispatch();

  const cart = useSelector((globalState) => globalState.cart.cart);

  useEffect(() => {
    dispatch(getProduct(props._id))
      .then((data) => {
        setProduct(data.payload.Product);
        dispatch(getImage(data.payload.Product.photos)).then((data) => {
          const { images } = data.payload;
          images.length &&
            setProduct((prev) => ({ ...prev, image: images[0]?.location }));
        });
        return data.payload.Product;
      })
      .then((data) => {
        cart.forEach((each) => {
          if (each._id === data._id) {
            setProduct((prev) => ({ ...prev, isAddedToCart: true }));
          }
        });
      });
  }, [cart]);

  const addProductToCart = () => {
    dispatch(addToCart({ ...Product, quantity: 1, totalPrice: Product.price }));
    setProduct((prev) => ({ ...prev, isAddedToCart: true }));
  };

  return (
    <>
      <div className="flex items-start gap-2">
        {Product?.name && (
          <div className="flex items-start gap-4 w-full p-1">
            {Product?.image && (
              <div className="w-1/3 h-24 md:h-28 md:w-28 lg:h-36 lg:w-36 rounded-md overflow-hidden">
                <img
                  src={Product?.image}
                  alt="Product item"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
            <div className="w-3/4 md:w-7/12 flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">{Product?.name}</h3>
              </div>
              <ReactStars
                classNames={"block"}
                count={5}
                value={3}
                edit={true}
              />
              <h5>₹ {Product?.price}</h5>
              <div className="flex items-start justify-between">
                <p className="text-ix">{Product?.descript}</p>
              </div>
              <button className="md:hidden flex items-center justify-center gap-2 text-zomato-400 bg-zomato-50 border-zomato-400 px-2 py-1 rounded-lg">
                <AiOutlinePlus /> Add
              </button>
            </div>
            <div className="hidden md:block w-2/12">
              <button
                className="flex items-center justify-center gap-2 text-zomato-400 bg-zomato-50 border-zomato-400 px-2 py-1 rounded-lg"
                disabled={Product?.isAddedToCart}
                onClick={addProductToCart}
              >
                {Product.isAddedToCart ? (
                  "Added"
                ) : (
                  <>
                    <AiOutlinePlus /> Add
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductItem;
