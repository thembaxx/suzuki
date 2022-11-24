import getCars from "./get/getCars";
import getModels from "./get/getModels";
import getCar from "./get/getCar";
import getDealerships from "./get/getDealerships";

import submitEnquiry from "./post/submitEnquiry";
import submitLead from "./post/submitLead";

const requests = {
  getCars,
  getModels,
  getCar,
  getDealerships,
  submitEnquiry,
  submitLead,
};

export default requests;
