import axios from "../axios";

const getModels = async (rangeName, brandName = "suzuki", type = "1") => {
  try {
    const resp = await axios.get(
      `BrandRange_NewandUsed/GetModels_NewAndUsed?BrandName=${brandName}&RangeName=${rangeName}&NewDemoUsed=${type}&InternalUse=1`
    );

    return resp.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getModels;
