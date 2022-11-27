import axios from "../axios";

const bookService = async (data) => {
  try {
    const resp = await axios.post(`Deal/InsertDeal`, {
      ...data,
    });

    return resp;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default bookService;
