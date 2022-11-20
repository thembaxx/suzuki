import axios from "../axios";

const getCar = async (modelID) => {
  try {
    const resp = await axios.get(`Car/Get?ModelID=${modelID}`);

    return resp.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getCar;
