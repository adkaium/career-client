
import React, {  useEffect, useState } from "react";
import Baner from "./Baner";
import HotJobs from "./HotJobs";

const Home = () => {
    const [jobsPromise, setJobsPromise]=useState([])
//   const jobsPromise =await fetch("http://localhost:3000/jobs").then((res) =>
//     res.json(),
//   );
    useEffect(()=>{
        fetch("http://localhost:3000/jobs")
        .then((res)=>res.json())
       .then((data)=>{
        setJobsPromise(data)
       })
    },[])
  return (
    <div>
      <Baner></Baner>
     <HotJobs jobsPromise={jobsPromise}></HotJobs>
    </div>
  );
};

export default Home;
