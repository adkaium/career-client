import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobLists from './JobLists';
import useJobApi from '../../hooks/useJobApi';

const MyPostedJob = () => {
    const {user} = useAuth()
    const {jobsPromise} = useJobApi()
    return (
      <div className='mt-10'>
        <h1>this is posted job</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <JobLists jobsPromise={jobsPromise(user.email)}></JobLists>
        </Suspense>
      </div>
    );
};

export default MyPostedJob;