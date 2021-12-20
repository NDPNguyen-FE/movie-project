import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListBanner, getListMovie } from "../Redux/thunk/movie.thunk";
import { getListTheater } from "../Redux/thunk/theater.thunk";
import DrawAntd from "../User/components/DrawAntd/DrawAntd";
import Header from "../User/components/Header/Header";
import ModalAntd from "../User/components/ModalAntd/ModalAntd";
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
      <ModalAntd/>
      <DrawAntd/>
    </div>
  );
};

export default UserLayout;
