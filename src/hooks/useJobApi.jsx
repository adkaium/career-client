import React from "react";
import useAxiosSecure from "./useAxiosSecure";

const useJobApi = () => {
  const axiosSeceur = useAxiosSecure();

  const jobsPromise = (email) => {
    return axiosSeceur.get(`jobs?email=${email}`).then((res) => res.data);
  };
  return {
    jobsPromise,
  };
};

export default useJobApi;
