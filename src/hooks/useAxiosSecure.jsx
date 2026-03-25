import axios from "axios";
import React, {use} from "react";
// import useAuth from './useAuth';
import {AuthContexts} from "../contexts/AuthContexts/AuthContexts";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});
const useAxiosSecure = () => {
  const useAuth = use(AuthContexts);
  const {user, signOutUser} = useAuth;
  console.log(user);

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        signOutUser()
          .then(() => {
            console.log("sign out user");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  );

  return axiosInstance;
};

export default useAxiosSecure;
