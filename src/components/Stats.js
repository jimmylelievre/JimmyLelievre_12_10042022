import React, { useEffect, useState } from "react";

import {
  getUser,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "./Apis.js";

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
  const [performanceKind, setPerformanceKind] = useState();
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    Promise.all(
      getUser(),
      getUserActivity(),
      getUserAverageSessions(),
      getUserPerformance()
    )
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

  console.log(user);

  return (
    <div className="stats">
      <div>
        <h1>
          Bonjour <span className="firstname-color">{}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        {/* <div className="container-graph">
          <div>
            <DailyActivity userActivity={value.activity} />
            <div className="activity">
              <SessionDuration userSession={value.averageSessions} />
              <TypesActivity
                data={value?.performance ?? []}
                kind={value.performanceKind}
              />
              <Score
                userScore={
                  value.user?.score ? value.user?.score : value.user?.todayScore
                }
              />
            </div>
          </div>
          <NutritionCards keyData={value.user?.keyData} />
        </div> */}
      </div>
    </div>
  );
};

export default Stats;
