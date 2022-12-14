import axios from "../axios";

const getCars = async () => {
  try {
    const resp = await axios.get(`BrandRange/GetRanges?Brand=Suzuki`);
    return resp.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getCars;
