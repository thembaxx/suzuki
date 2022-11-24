import axios from "../axios";

const getDealerships = async () => {
  try {
    const resp = await axios.get(`BrandRange/GetCarterBrands`);
    return resp.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getDealerships;