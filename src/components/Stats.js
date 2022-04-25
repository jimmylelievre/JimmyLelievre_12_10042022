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
 * Component for the showing the dashbord
 *
 * @component
 * @example
 * return (
 *   <Stats />
 * )
 */

const Stats = () => {
  const [user, setUser] = useState();
  const [activity, setActivity] = useState();
  const [averageSessions, setAverageSessions] = useState();
  const [performance, setPerformance] = useState();
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    Promise.all([
      getUser(),
      getUserActivity(),
      getUserAverageSessions(),
      getUserPerformance(),
    ])
      .then(([user, activity, averageSessions, userPerformance]) => {
        setUser(user);
        setActivity(activity);
        setAverageSessions(averageSessions);
        setPerformance(userPerformance);
      })
      .catch(() => {
        setApiError(true);
      });
  }, []);

  console.log(performance?.data);

  return (
    <div className="stats">
      <div>
        <h1>
          Bonjour{" "}
          <span className="firstname-color">{user?.userInfos?.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div className="container-graph">
          <div>
            <DailyActivity userActivity={activity} />
            <div className="activity">
              <SessionDuration userSession={averageSessions} />
              <TypesActivity
                data={performance?.data}
                kind={performance?.kind}
              />
              <Score userScore={user?.score ? user?.score : user?.todayScore} />
            </div>
          </div>
          <NutritionCards keyData={user?.keyData} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
