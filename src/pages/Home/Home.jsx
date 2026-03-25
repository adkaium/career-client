import React, {useEffect, useState} from "react";
import Baner from "./Baner";
import HotJobs from "./HotJobs";
import CategorySection from "./CategorySection";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  //   const jobsPromise =await fetch("http://localhost:3000/jobs").then((res) =>
  //     res.json(),
  //   );
  console.log(jobs);
  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <div>
      <Baner></Baner>
      <CategorySection></CategorySection>
      <HotJobs jobs={jobs}></HotJobs>
    </div>
  );
};

export default Home;
