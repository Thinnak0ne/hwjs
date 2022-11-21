import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../Img/reo.jpg";

function App() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  const [name, setName] = React.useState();
  const [pass, setPass] = React.useState();

  const sendname = (e) => {
    setName(e.target.value);
    
  };

  const sendpass = (p) => {
    setPass(p.target.value);
  };

  const login = () => {
    if (name === "admin" && pass === "admin") {
      alert("ຍິນດີນຳ ເຈົ້າເປັນອິດສະຫຼະແລ້ວ!")
      navigate("/admin");
      return false;
    } else if (name === "user" && pass === "user") {
      alert("ຍິນດີນຳ ເຈົ້າໄດ້ຕົກອັບແລ້ວ!")
      navigate("/user");
      return false;
    } else {
      alert("ຂໍໂທດເດີ ເພາະເຈົ້າບໍ່ແມ່ນຄົນນັ້ນ ! ");
    }
  };

  return (
    <div className="App-header">
      <div className="font" >ເຈົ້າບໍ່ມີທາງເລືອກ</div>
      <img src={Img1} alt="" className="img" />
      <input className="input" type="email" placeholder="ກະລຸນາໃສ່ໃຫ້ຖືກ" onChange={sendname}></input>
      <input className="input" type="password" placeholder="ກະລຸນາຢ່າເດົາ" onChange={sendpass}></input>
      <button className="Bt2" onClick={login} > ຫາກະແຈໄດ້ແລ້ວ </button>
      <div
        style={{ fontSize: "18px", paddingTop: "10px", cursor: "pointer" }}
        onClick={handleClose} className="text"
      >
        ຢາກກັບແລ້ວແມ່ນບໍ່ ເພາະຢູ່ໄປເຂົາກໍບໍ່ຮັກ
      </div>
    </div>
  );
}
export default App;
