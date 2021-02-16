import axios from "axios";

axios.defaults.baseURL = "https://ghost.sebasptsch.dev/ghost/api/v3/content";
axios.defaults.params = {
  key: process.env.KEY,
};
export const fetcher = (...args) => axios(...args).then((res) => res.data);
