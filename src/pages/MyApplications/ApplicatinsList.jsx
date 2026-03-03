
import React, { use } from 'react';

const ApplicatinsList = ({myApplicationsPromise}) => {
    const applications = use(myApplicationsPromise);
  return (
    <div>
        <h2>All applicant List: {applications.length}</h2>
    </div>
  )
};

export default ApplicatinsList;