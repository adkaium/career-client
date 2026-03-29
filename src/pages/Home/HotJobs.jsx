import React from "react";
import JobCard from "../Shared/JobCard";
import JobsCategoryTabs from "./JobsCategoryTab";

const HotJobs = ({jobs}) => {
  console.log(jobs);
  return (
    <>
      <JobsCategoryTabs></JobsCategoryTabs>
      <div className="flex  flex-4 flex-wrap justify-center flex- gap-4 ">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </>
  );
};

export default HotJobs;
