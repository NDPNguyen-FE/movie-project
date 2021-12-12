import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListBanner, getListMovie } from "../Redux/thunk/movie.thunk";
import Header from "../User/components/Header/Header";

const UserLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListBanner());
    dispatch(getListMovie());
  }, [dispatch]);

  return (
    <div className="userLayout">
      <Header />
      {children}
    </div>
  );
};

export default UserLayout;
