import React, { useEffect, useState } from "react";
import Stats from "./Stats";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../assets/data";

const currentUser = 12; // Avalaible user on api : 12 | 18
const apiUrl = "http://localhost:3000"; // default: 'http://localhost:3000'
const mockData = false; // true: data are mocked | false: get data form api
const simDataLoadingTime = 0; // 0: no sim | time in ms

const ConfigApi = () => {
  /**
   * State
   */
  const [user, setUser] = useState();
  const [activity, setActivity] = useState();
  const [averageSessions, setAverageSessions] = useState();
  const [performance, setPerformance] = useState();
  const [performanceKind, setPerformanceKind] = useState();
  const [apiError, setApiError] = useState(false);

  /**
   * Get user data
   */
  const getUser = () => {
    if (!mockData)
      fetch(`${apiUrl}/user/${currentUser}`)
        .then((response) => response.json())
        .then((data) => setUser(data.data))
        .catch((error) => setApiError(true));
    else setUser(USER_MAIN_DATA.find((item) => item.id === currentUser));
  };
  useEffect(() => {
    if (simDataLoadingTime === 0) getUser();
    else setTimeout(getUser, simDataLoadingTime);
  }, []);

  /**
   * Get user activity data
   */
  const getUserActivity = () => {
    if (!mockData)
      fetch(`${apiUrl}/user/${user.id}/activity`)
        .then((response) => response.json())
        .then((data) => setActivity(data.data.sessions))
        .catch((error) => setApiError(true));
    else
      setActivity(
        USER_ACTIVITY.find((activity) => activity.userId === user.id).sessions
      );
  };

  /**
   * Get user average sessions data
   */
  const getUserAverageSessions = () => {
    if (!mockData)
      fetch(`${apiUrl}/user/${user.id}/average-sessions`)
        .then((response) => response.json())
        .then((data) => setAverageSessions(data.data.sessions))
        .catch((error) => setApiError(true));
    else
      setAverageSessions(
        USER_AVERAGE_SESSIONS.find(
          (averageSessions) => averageSessions.userId === user.id
        ).sessions
      );
  };

  /**
   * Get user performance data
   */
  const getUserPerformance = () => {
    if (!mockData)
      fetch(`${apiUrl}/user/${user.id}/performance`)
        .then((response) => response.json())
        .then((data) => {
          setPerformance(data.data.data);
          setPerformanceKind(data.data.kind);
        })
        .catch((error) => setApiError(true));
    else {
      const performance = USER_PERFORMANCE.find(
        (performance) => performance.userId === user.id
      );
      setPerformance(performance.data);
      setPerformanceKind(performance.kind);
    }
  };

  useEffect(() => {
    if (!user) return;
    const getUserData = () => {
      getUserActivity();
      getUserAverageSessions();
      getUserPerformance();
    };
    if (simDataLoadingTime === 0) getUserData();
    else setTimeout(getUserData, simDataLoadingTime);
  }, [user]);

  return <div></div>;
};

export default ConfigApi;
