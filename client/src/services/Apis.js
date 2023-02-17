import { commonRequest } from "./ApiCall.js";
import { BASE_URL } from "./helper";

export const registerUser = async (data, header) => {
  return await commonRequest("POST", `${BASE_URL}/user/register`, data, header);
};


export const getAllUsers = async () => {
  return await commonRequest("GET", `${BASE_URL}/all-users`,"");
};

export const  getSingleUser= async (id) => {
  return await commonRequest("GET", `${BASE_URL}/user/${id}`,"")
}