import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const ApplyJob = () => {
    const {id:jobId} = useParams();
    const {user} = useAuth();
   console.log(jobId, user);
   const handelFrom =(e)=>{
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

      const applicant = {
        user: user?.email,
        job: jobId,
        linkedin: linkedin,
        github: github,
        resume: resume,
      };
      console.log(applicant);
      axios
        .post("http://localhost:3000/applications", applicant)
        .then((res) => {
          console.log(res.data);
          if(res.data.acknowledged){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your application has been submitted",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
   }
 
    return (
      <div>
        <h2>
          Apply This Job:<Link to={`/jobs/${jobId}`}>See Details</Link>
        </h2>
        <form onSubmit={handelFrom}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Page details</legend>

            <label className="label">LinkedIn</label>
            <input
              type="url"
              name='linkedIn'
              className="input"
              placeholder="linkedin"
            />

            <label className="label">Github</label>
            <input
              type="url"
              name='github'
              className="input"
              placeholder="github"
            />

            <label className="label">Resume</label>
            <input type="url" name='resume' className="input" placeholder="resume" />
            <input type="submit" className='btn btn-primary' />
          </fieldset>
          
        </form>
      </div>
    );
};

export default ApplyJob;