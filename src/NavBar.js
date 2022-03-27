import Animals from "./Animals.png";
import Doctors from "./Doctors.png";
import Health from "./Health.png";
import About from "./About.png";
import Logo from "./Logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={Logo} className="logo" height="123" alt="Logo" />
      </div>
      <div className="list">
        <ul>
          <li>
            <img src={Animals} width="130px" height="123" alt="Animals" />
            <img src={Doctors} width="120px" height="113" alt="Animals" />
            <img src={Health} width="120px" height="113" alt="Health" />
            <img src={About} width="120px" height="113" alt="About" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
