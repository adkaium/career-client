import React from "react";
import JobCard from "../Shared/JobCard";
import JobsCategoryTabs from "./JobsCategoryTab";

const HotJobs = ({jobs}) => {
  console.log(jobs);
  return (
    <>
      <JobsCategoryTabs></JobsCategoryTabs>
      <div className="grid gap-1.5 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-2">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </>
  );
};

export default HotJobs;
