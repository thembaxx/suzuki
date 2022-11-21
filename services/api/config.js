import { config } from "../../data/config";
const AUTH_CODE = "Mjo4OTJDOTQ3NC1BMzE2LTQ5OEEtOEFBQy04RTZEMDY1RThDRUM=";

const APIConfig = () => {
  const prodConfig = {
    API_URL: "https://api.heycarter.com/api/v1/",
    AUTH_CODE,
  };

  const devConfig = {
    API_URL: "https://devapi.heycarter.com/api/v1/",
    AUTH_CODE,
  };

  return config.env === "dev" ? devConfig : prodConfig;
};

export default APIConfig;
