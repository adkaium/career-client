import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useApplicationApi = () => {
  const axiosSeceur = useAxiosSecure()

    const myApplicationsPromise = email =>{
      return axiosSeceur.get(
        `applications?email=${email}`
      ).then(res=>res.data);
    }
    return {
        myApplicationsPromise
    }
};

export default useApplicationApi;