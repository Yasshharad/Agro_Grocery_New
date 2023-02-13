import React from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Store = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  if (`/Store/${id}` === pathname) {
    return <Navigate to={`/Store/${id}/overview`} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default Store;
