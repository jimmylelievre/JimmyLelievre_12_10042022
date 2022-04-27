import React from "react";
import logo from "../assets/logo.png";

/**
 * Component for the showing the header
 * @return {JSX}
 */

const Header = () => {
  return (
    <header className="header">
      <div>
        {" "}
        <img src={logo} alt="logo" />{" "}
      </div>
      <nav>
        <ul>
          <li> Accueil</li>
          <li> Profil</li>
          <li> Réglage</li>
          <li> Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
