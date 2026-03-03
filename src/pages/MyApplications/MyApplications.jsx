import React, { Suspense } from 'react';
import MyApplicationStace from './MyApplicationStace';
import ApplicatinsList from './ApplicatinsList';
import { myApplicationsPromise } from '../../api/applicationsApi';
import useAuth from '../../hooks/useAuth';


const MyApplications = () => {
   const {user}= useAuth()
    return (
      <div>
        <MyApplicationStace></MyApplicationStace>
        <Suspense fallback={<div>Loading...</div>}>
          <ApplicatinsList myApplicationsPromise={myApplicationsPromise(user.email)}>
          </ApplicatinsList>
        </Suspense>
      </div>
    );
};

export default MyApplications;