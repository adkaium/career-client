
import React from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = ({jobsPromise}) => {
  const jobs = jobsPromise;
  console.log(jobs);
  return (
    <>
       <h2 className="text-4xl text-center p-4">Hot Jobs Of The Day</h2>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)}
      </div>
    </>
  );
};

export default HotJobs;
