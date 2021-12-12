import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListBanner, getListMovie } from "../Redux/thunk/movie.thunk";
import { getListTheater } from "../Redux/thunk/theater.thunk";
import Header from "../User/components/Header/Header";
import LayoutContent from "../User/LayoutContent/LayoutContent";

const UserLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListBanner());
    dispatch(getListMovie());
    dispatch(getListTheater());
  }, [dispatch]);

  return (
    <div className="userLayout">
      <Header />
      <LayoutContent> {children}</LayoutContent>
    </div>
  );
};

export default UserLayout;
