import React, {use} from "react";

import {AuthContexts} from "../../contexts/AuthContexts/AuthContexts";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const {user} = use(AuthContexts);
  const formHandel = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const {min, max, currency, ...newJob} = data;
    newJob.salaryRange = {min, max, currency};
    
    // process requirements 
    const newRequirement = newJob.requirements.split(",");
    const lastRequirement = newRequirement
      .map((req) => req.trim())
      .filter((req) => req);
    newJob.requirements = lastRequirement;

    // process responsibilities 
    const newRespos = newJob.responsibilities.split(",");
    const lastRespos = newRespos.map((res) => res.trim()).filter((res) => res);
    newJob.responsibilities = lastRespos;
    console.log(newJob);

    newJob.status = "active";

    // seve to database
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        console.log(res.data);
        if(res.data.insertedId){
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
  };

  return (
    <div>
      <form onSubmit={formHandel}>
        <div className=" flex flex-col-3 flex-wrap justify-center gap-4">
          <div>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Job Details</legend>

              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                className="input"
                placeholder="Job Title"
              />
              <label className="label">Company Name</label>
              <input
                type="text"
                name="company"
                className="input"
                placeholder="Company Name"
              />
              <label className="label">Company Logo</label>
              <input
                type="text"
                name="company_logo"
                className="input"
                placeholder="Company Logo"
              />

              <label className="label">Category</label>
              <select
                defaultValue="Pick a color"
                name="category"
                className="select"
              >
                <option disabled={true}>Job Category</option>
                <option>Development</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>Human Resources</option>
                <option>Finance</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Job Type</legend>
              <div className="filter">
                <input
                  className="btn filter-reset"
                  type="radio"
                  name="jobType"
                  aria-label="X"
                />
                <input
                  className="btn"
                  type="radio"
                  name="jobType"
                  aria-label="On-Site"
                  value="On-Site"
                />
                <input
                  className="btn"
                  type="radio"
                  name="jobType"
                  aria-label="Remote"
                  value="Remote"
                />
                <input
                  className="btn"
                  type="radio"
                  name="jobType"
                  aria-label="Hybrid"
                  value="Hybrid"
                />
              </div>
            </fieldset>
          </div>

          <div>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Job Requirement</legend>
              <textarea
                name="requirements"
                className="textarea h-24"
                placeholder="Job Requirement with commam"
              ></textarea>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Job Responsibilities</legend>
              <textarea
                name="responsibilities"
                className="textarea h-24"
                placeholder="Job Responsibilities"
              ></textarea>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Salary Range</legend>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div>
                  <label className="label">Minimam Salary</label>
                  <input
                    type="text"
                    name="min"
                    className="input"
                    placeholder="Minimum Salary"
                  />
                </div>
                <div>
                  <label className="label">Maximum Salary</label>
                  <input
                    type="text"
                    name="max"
                    className="input"
                    placeholder="Maximum Salary"
                  />
                </div>
                <div>
                  <label className="label">Currancy</label>
                  <select
                    defaultValue="Pick a color"
                    name="currency"
                    className="select"
                  >
                    <option disabled={true}>Select Currency</option>
                    <option>US Dollar</option>
                    <option>Eur</option>
                    <option>Bdt</option>
                  </select>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Company Contact Info</legend>
              <label className="label">HR Name</label>
              <input
                type="text"
                name="hr_name"
                className="input"
                placeholder="HR Name"
              />
              <label className="label">HR Email</label>
              <input
                type="email"
                name="hr_email"
                className="input"
                placeholder="HR Email"
                defaultValue={user.email}
              />
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input"
                placeholder="Job Location"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Application Deadline</legend>
              <input type="date" name="applicationDeadline" className="input" />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 content-center">
              <input
                type="submit"
                value="Add Job"
                className=" btn btn-primary"
              />
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
