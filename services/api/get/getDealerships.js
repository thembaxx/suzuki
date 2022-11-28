import axios from "../axios";

const getDealerships = async () => {
  try {
    const resp = await axios.get(
      `BrandRange/GetCarterBrandsByBrandID?BrandID=57`
    );
    return resp.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getDealerships;
