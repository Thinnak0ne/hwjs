import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../Img/reo2.jpg";

export default function User() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <div className="App-header">
      <div>hello</div>
      <div>User</div>
      <img src={Img1} alt="" className="img" />
      <div>Account!</div>
      <div className="info">Thinnakone</div>
      <div className="info1">Khotsimeuang</div>
      <div className="text" onClick={handleClose} >Get out of my way</div>
    </div>
  );
}
