import axios from "axios";
import APIConfig from "./config";

const { API_URL, AUTH_CODE } = APIConfig();

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Basic ${AUTH_CODE}=`,
    "cache-control": "no-cache",
  },
});

export default instance;
