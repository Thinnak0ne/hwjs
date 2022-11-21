import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/loggin')
    };
  return (
  <div className="App-header">
    <div className="font">ຍິນດີຕ້ອນຮັບໂລກແຫ່ງໂຄດ</div>
    <div className="font" >ກົດປຸ່ມນີ້</div>
    <button className="Bt2" onClick={handleClose}> Login!!!!!!!!!!!!! </button>
  </div>
  )
}
