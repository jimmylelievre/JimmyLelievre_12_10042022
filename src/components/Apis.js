import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../assets/data";

const currentUser = 12; // Avalaible user on api : 12 | 18
const apiUrl = "http://localhost:3000"; // default: 'http://localhost:3000'
const mockData = false; // true: data are mocked | false: get data form api
const apiHost = `${apiUrl}/user/${currentUser}`;

const findUserById = (item) => item.id === currentUser;
const findDataById = (item) => item.userId === currentUser;

const userInfo = {
  mockData: {
    user: USER_MAIN_DATA,
    activity: USER_ACTIVITY,
    averageSessions: USER_AVERAGE_SESSIONS,
    performance: USER_PERFORMANCE,
  },
  apiData: {
    user: apiHost,
    activity: apiHost + "/activity",
    averageSessions: apiHost + "/average-sessions",
    performance: apiHost + "/performance",
  },
};

export const getUser = () => getData("user");
export const getUserActivity = () => getData("activity");
export const getUserAverageSessions = () => getData("averageSessions");
export const getUserPerformance = () => getData("performance");

/**
 * Get user data
 */

export const getData = (info) => {
  if (mockData) {
    const fn = info === "user" ? findUserById : findDataById;
    const user = userInfo.mockData[info].find(fn);

    return new Promise((resolve) =>
      resolve({
        data: user,
      })
    );
  } else {
    return fetch(userInfo.apiData[info]).then((response) => response.json());
  }
};
