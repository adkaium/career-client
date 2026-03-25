import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplicant = () => {
    const {job_id} = useParams();
    const applicants = useLoaderData()
    console.log(applicants);
    const handelStatusChange = (e,app_id)=>{
        const status = e.target.value;
        console.log(status,app_id);
        axios.patch(`http://localhost:3000/applications/${app_id}`,{status})
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "Your application has been updated",
                              showConfirmButton: false,
                              timer: 1500,
                            });
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
      <div>
        <h1>
          {applicants.length} Applicants for Job {job_id}
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Update Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {applicants.map((applicant, index) => (
                <tr key={applicant._id}>
                  <th>{index + 1}</th>
                  <td>{applicant.user}</td>
                  <td>{applicant.job}</td>
                  <td>
                    <select
                      onChange={(e) => handelStatusChange(e, applicant._id)}
                      defaultValue={applicant.status}
                      className="select"
                    >
                      <option disabled={true}>Update Status</option>
                      <option>Panding</option>
                      <option>Rejected</option>
                      <option>Haird</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ViewApplicant;