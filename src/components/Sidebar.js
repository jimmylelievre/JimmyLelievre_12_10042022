import React from "react";
import iconMeditation from "../assets/images/iconMeditation.png";
import iconSwim from "../assets/images/iconSwim.png";
import iconBike from "../assets/images/iconBike.png";
import iconDumbbell from "../assets/images/iconDumbbell.png";

/**
 * Component for the showing the top menu
 *
 * @component
 * @example
 * return (
 *   <Sidebar />
 * )
 */

const Sidebar = () => {
  return (
    <section className="sidebar">
      <nav>
        <ul>
          <li>
            <img src={iconMeditation} alt="meditation" />
          </li>
          <li>
            <img src={iconSwim} alt="swim" />
          </li>
          <li>
            <img src={iconBike} alt="bike" />
          </li>
          <li>
            <img src={iconDumbbell} alt="dumbbell" />
          </li>
        </ul>
      </nav>
      <span className="copyrights"> Copyright, SportSee 2020 </span>
    </section>
  );
};

export default Sidebar;
