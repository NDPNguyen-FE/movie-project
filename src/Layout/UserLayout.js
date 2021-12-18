import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListBanner, getListMovie } from "../Redux/thunk/movie.thunk";
import { getListTheater } from "../Redux/thunk/theater.thunk";
import Header from "../User/components/Header/Header";
import LayoutContent from "../User/LayoutContent/LayoutContent";
import Footer from "../User/components/Footer/Footer";
import { getProfileByToken } from "../Redux/thunk/auth.thunk";

const UserLayout = ({ children }) => {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(getListBanner());
    dispatch(getListMovie());
    dispatch(getListTheater());
    dispatch(getProfileByToken(accessToken));
  }, [dispatch, accessToken]);

  return (
    <div className="userLayout">
      <Header />
      <LayoutContent> {children}</LayoutContent>
      <Footer />
    </div>
  );
};

export default UserLayout;
