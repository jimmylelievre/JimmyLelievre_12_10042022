import React, { useEffect, useState } from "react";
import data from "../assets/data.js";
import DailyActivity from "./DailyActivity.js";
import NutritionCards from "./NutritionCards.js";
import Score from "./Score.js";
import SessionDuration from "./SessionDuration.js";
import TypesActivity from "./TypesActivity.js";
import { getUser, getUserActivity } from "./Apis.js";

/**
 * Component for the showing the dashbord
 *
 * @component
 * @example
 * return (
 *   <Stats />
 * )
 */

const Stats = ({ value }) => {
  const [user, setUser] = useState();
  const [activity, setActivity] = useState();
  const [averageSessions, setAverageSessions] = useState();
  const [performance, setPerformance] = useState();
  const [performanceKind, setPerformanceKind] = useState();
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    /* getUser()
      .then((user) => {
        setUser(user);
      })
      .catch(() => {
        setApiError(true);
      }); */
    Promise.all(getUser(), getUserActivity())
      .then(([user, activity]) => {
        setUser(user);
        setActivity(activity);
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
