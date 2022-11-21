import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../Img/exp1.jpg";

export default function Admin() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <div className="App-header">
      <div className="font">Welcome to the hell(Admin)</div>
      <img src={Img1} alt="" className="gif1" />
      <div className="font">ອິດສະຫຼະທີ່ຂ້ອຍບອກ </div>
      <div className="info">Thinnakone</div>
      <div className="info1">Khotsimeuang</div>
      <div onClick={handleClose} className="text1">
        ກົດນີ້ເພື່ອ...!!
      </div>
    </div>
  );
}
