import axios from "../axios";

/**
 * @function submitEnquiry
 * @description Submit an Enquiry
 * @param {object} data - configuration object
 * @param {string} data.UserFirstname - First name of the user
 * @param {string} data.UserSurname - Last name of the user
 * @param {string} data.UserName - Email of the user
 * @param {string} data.ContactMessage - Message entered by the user
 * @param {string} data.UserType - User Type (USER)
 * @param {string} data.ServiceType - Service Type (CONTACT)
 * @param {string} data.UserToken - GUID
 * @return {Promise} Resolved with respose of post request
 * @example
 *
 *
 * const data = {
*     UserFirstname: "John",
*     UserSurname: "Doe",
*     UserName: "john.doe@test.com",
*     UserPhoneNumber: "(083) 555 1239",
*     ContactMessage: "this is a message",
*     UserType: "USER",
*     ServiceType: "CONTACT",
*     UserToken: "b56343dd-3dfb-4e6b-8669-54aeb24e5a6f",
}
 *
 * const resp = await submitEnquiry(data);
 * console.log(resp)
 *
 *
 * //prints
 *
 *
 *{
 *  "code": "SUCCESS",
 *  "details": {
 *    "id": "111155000000036014"
 *  },
 *  "message": "Record approved successfully",
 *  "status": "success"
 *}
 *
 */
const submitEnquiry = async (data) => {
  try {
    const resp = await axios.post(`User/InsertContactRequest`, {
      ...data,
    });

    console.log(resp);

    return resp;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default submitEnquiry;
