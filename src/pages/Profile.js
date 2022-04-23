import React from "react";

import ConfigApi from "../components/ConfigApi.js";
import Stats from "../components/Stats.js";

/**
 * Component for the showing the top menu
 *
 * @component
 * @example
 * return (
 *   <Profile />
 * )
 */

const Profile = () => {
  return (
    <div className="profile">
      <Stats />
    </div>
  );
};

export default Profile;
