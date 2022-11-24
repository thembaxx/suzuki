import axios from "../axios";

const submitLead = async (data) => {
  try {
    const resp = await axios.post(`Deal/InsertDeal`, {
      ...data,
    });

    console.log(resp);

    return resp;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default submitLead;
