import React, {use} from "react";

const ApplicatinsList = ({myApplicationsPromise}) => {
  const applications = use(myApplicationsPromise);
  console.log(applications);
  return (
    <div>
      <h2>All applicant List: {applications.length}</h2>
    </div>
  );
};

export default ApplicatinsList;
