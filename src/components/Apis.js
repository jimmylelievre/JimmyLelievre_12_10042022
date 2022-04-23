import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../assets/data";

const currentUser = 12; // Avalaible user on api : 12 | 18
const apiUrl = "http://localhost:3000"; // default: 'http://localhost:3000'
const mockData = true; // true: data are mocked | false: get data form api

/**
 * Get user data
 */

export const getUser = () => {
  if (mockData) {
    const user = USER_MAIN_DATA.find((item) => item.id === currentUser);
    return new Promise((resolve) => resolve(user));
  } else {
    return fetch(`${apiUrl}/user/${currentUser}`).then((response) =>
      response.json()
    );
  }
};

/**
 * Get user activity data
 */
export const getUserActivity = () => {
  if (mockData) {
    const activity = USER_ACTIVITY.find(
      (activity) => activity.userId === currentUser
    ).sessions;
    return new Promise((resolve) => resolve(activity));
  } else {
    return fetch(`${apiUrl}/user/${currentUser}/activity`).then((response) =>
      response.json()
    );
  }
};

/**
 * Get user average sessions data
 */

export const getUserAverageSessions = () => {
  if (mockData) {
    const averageSessions = USER_AVERAGE_SESSIONS.find(
      (averageSessions) => averageSessions.userId === currentUser
    ).sessions;
    return new Promise((resolve) => resolve(averageSessions));
  } else {
    return fetch(`${apiUrl}/user/${currentUser}/average-sessions`).then(
      (response) => response.json()
    );
  }
};

/**
 * Get user performance data
 */

export const getUserPerformance = () => {
  if (mockData) {
    const userPerformance = USER_PERFORMANCE.find(
      (performance) => performance.userId === currentUser
    );
    return new Promise((resolve) => resolve(userPerformance));
  } else {
    return fetch(`${apiUrl}/user/${currentUser}/performance`).then((response) =>
      response.json()
    );
  }
};
