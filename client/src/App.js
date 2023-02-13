import "./App.css";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// pages
import Checkout from "./pages/Checkout.page";
import GoogleAuth from "./pages/GoogleAuth.page";
import Home from "./pages/Home.page";
import Store from "./pages/Store.page";

// components
import Overview from "./components/Store/Overview";
import OrderOnline from "./components/Store/OrderOnline";
import Menu from "./components/Store/Menu";
import Reviews from "./components/Store/Reviews";
import Photos from "./components/Store/Photos";
import StoreLayout from "./layouts/Store.layout";

// redux
import { useDispatch } from "react-redux";
import { getMySelf } from "./redux/reducers/user/user.action";
import { getCart } from "./redux/reducers/cart/cart.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMySelf());
    dispatch(getCart());
  }, [localStorage]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/delivery" />} />
        <Route path="/:type" element={<Home />} />
        {/* <Route path="/Store/:id" element={<RedirectStore />} /> */}
        <Route path="/google/:token" element={<GoogleAuth />} />
        <Route
          path="/Store/:id"
          element={
            <StoreLayout>
              <Store />
            </StoreLayout>
          }
        >
          <Route path="overview" element={<Overview />} />
          <Route path="order-online" element={<OrderOnline />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="menu" element={<Menu />} />
          <Route path="photos" element={<Photos />} />
        </Route>
        <Route path="/checkout/orders" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
