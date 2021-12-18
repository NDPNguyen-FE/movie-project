import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from 'antd';
import {
   SettingOutlined,
  } from '@ant-design/icons';
import Button from "../../components/Button/Button";
import UserInfo from './UserInfo/UserInfo';
import BookingInfo from './BookingInfo/BookingInfo';
import "./UserProfile.scss";


export default function UserDetail(props) {

  const {profile, isAuthenticated} = useSelector((state) => state.auth);
  const [page, setPage] = useState("userInfo");


    return (
        <div className="userdetail_section">
          <div className="userdetail_menu">
            <div className="userdetail_menu_content">
                <div className="userdetail_avatar">
                    <Avatar src={`https://ui-avatars.com/api/?name=${profile.taiKhoan}`} />
                    <h3 >Hello <span>
                                {
                                    isAuthenticated === "KhachHang" ? "Khách Hàng" : "Admin"
                                }
                            </span>
                        </h3>
                    <h3 className="user_name">{profile.taiKhoan}</h3>
                </div>

                <div className="d-flex thongtinchung">
                    <SettingOutlined/>
                    <h1>Thông tin chung</h1>
                </div>

                <div className="changePage_section">
                    <button className= {page === "userInfo" ? "changePage_btn active" : "changePage_btn"}
                    onClick = {() => {setPage("userInfo")}}
                    >Thông tin cá nhân</button>
                    <button className= {page === "bookingInfo" ? "changePage_btn active" : "changePage_btn"}
                    onClick = {() => {setPage("bookingInfo")}}

                    >Vé đã đặt</button>
                </div>
            
            </div>
          </div>
          
          <div className="userdetail_content">
                {
                    page === "userInfo" && (
                        <>
                            <UserInfo/>
                        </>
                    )
                }          
                {
                    page === "bookingInfo" && (
                        <>
                            <BookingInfo/>
                        </>
                    )
                }          
          </div>
        </div>
    )
}
