//Header
import { LOGO_URL } from "../Utils/constant";
const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="Nav-bar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
