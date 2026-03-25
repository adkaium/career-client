import React, { use } from 'react';
import { Link } from 'react-router';

const JobLists = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
  return (
    <div>
      <h1>this is job list</h1>
      <h3 className="text-3xl">{jobs.length} jobs found</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Application Deadline</th>
              <th>Status</th>
              <th>Veiw Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.status}</td>
                <td><Link to={`/applications/${job._id}`}>View Applications</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobLists;