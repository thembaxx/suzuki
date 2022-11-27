import axios from "../axios";

const bookService = async (data) => {
  try {
    const resp = await axios.post(`User/InsertContactRequest`, {
      ...data,
    });

    return resp;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default bookService;
