import axios from "axios";

axios.defaults.baseURL = "https://blog.sebasptsch.dev";
// axios.defaults.params = {
//   key: "d9b31df3bebf8277d200f38dd2",
// };
export const fetcher = (...args) => axios(...args).then((res) => res.data);
