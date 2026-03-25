import React, {Suspense} from "react";
import MyApplicationStace from "./MyApplicationStace";
import ApplicatinsList from "./ApplicatinsList";
import useAuth from "../../hooks/useAuth";
import useApplicationApi from "../../hooks/useApplicationApi";

const MyApplications = () => {
  const {user} = useAuth();
  const {myApplicationsPromise}=useApplicationApi();
  
  return (
    <div>
      <MyApplicationStace></MyApplicationStace>
      <Suspense fallback={<div>Loading...</div>}>
        <ApplicatinsList
          myApplicationsPromise={myApplicationsPromise(
            user.email,
          )}
        ></ApplicatinsList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
