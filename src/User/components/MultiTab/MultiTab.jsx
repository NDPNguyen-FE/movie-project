import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCalMovieTheater } from "../../../Redux/thunk/theater.thunk";
import CardTheater from "../CardTheater/CardTheater";
import "./MultiTab.scss";

const { TabPane } = Tabs;

const MultiTab = () => {
  const { theaterSystem, calMovieTheater } = useSelector(
    (state) => state.theater
  );
  const dispatch = useDispatch();
  const [listTheater, setListTheater] = useState("BHDStar");

  useEffect(() => {
    dispatch(getCalMovieTheater(listTheater));
  }, [listTheater, dispatch]);

  const handleClickTab = (value) => {
    setListTheater(value);
  };

  const handleClickTab2 = (value) => {
    // console.log(value);
  };

  const lstCumRap = calMovieTheater.map((item, index) => item.lstCumRap);

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        style={{ height: 520 }}
        className="multitab"
        onTabClick={handleClickTab}
      >
        {theaterSystem.map((theater, index) => (
          <TabPane
            tab={
              <img
                src={theater.logo}
                alt="logo-theater"
                className="multitab-logo"
              />
            }
            key={theater.maHeThongRap}
          >
            <Tabs
              tabPosition="left"
              style={{ height: 520 }}
              key={index}
              onTabClick={handleClickTab2}
            >
              {lstCumRap &&
                lstCumRap.map((clusterTheater, ctIndex) => {
                  return clusterTheater.map((item, childIndex) => {
                    const listMovie = item.danhSachPhim;

                    return (
                      <TabPane
                        tab={item && <CardTheater theater={item} />}
                        key={item.maCumRap}
                      >
                        <Tabs
                          tabPosition="left"
                          style={{ height: 520 }}
                          key={childIndex}
                        ></Tabs>
                      </TabPane>
                    );
                  });
                })}
            </Tabs>
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default MultiTab;
