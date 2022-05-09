import React, { useEffect, useState } from "react";

import {
  getUser,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "./Apis.js";

import DailyActivity from "./DailyActivity.js";
import SessionDuration from "./SessionDuration.js";
import TypesActivity from "./TypesActivity.js";
import Score from "./Score.js";
import NutritionCards from "./NutritionCards.js";

/**
 * Component for the showing the dashboard
 * @return {JSX}
 */

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    Promise.all([
      getUser(),
      getUserActivity(),
      getUserAverageSessions(),
      getUserPerformance(),
    ])
      .then(([user, activity, averageSessions, performance]) => {
        setUserData({
          user,
          activity,
          averageSessions,
          performance,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  if (userData === null) {
    return (
      <p className="error">
        La connexion avec notre serveur a été perdu, n'hésitez pas à verifier
        votre connexion internet et à rafraichir la page et si le problème
        persite merci de contacter un administrateur.
      </p>
    );
  }

  if (userData === null) {
    return null;
  }

  let { user, activity, averageSessions, performance } = userData;

  return (
    <div className="stats">
      <div>
        <h1>
          Bonjour{" "}
          <span className="firstname-color">
            {user?.data?.userInfos?.firstName}
          </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div className="container-graph">
          <div>
            <DailyActivity userActivity={activity?.data?.sessions} />
            <div className="activity">
              <SessionDuration userSession={averageSessions?.data?.sessions} />
              <TypesActivity
                data={performance?.data?.data}
                kind={performance?.data?.kind}
              />
              <Score userScore={user?.data?.score} />
            </div>
          </div>
          <NutritionCards keyData={user?.data?.keyData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
