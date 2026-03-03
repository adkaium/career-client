import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {
      _id,
      title,
    //   location,
    //   jobType,
    //   category,
    //   description,
    //   company_logo,
    //   company,
    //   requirements,
    //   salaryRange,
    } = useLoaderData();
    
    return (
      <div>
        <h1>{title}</h1>
        <Link to={`/apply/${_id}`}>
          <button className="btn btn-primary">Apply Now</button>
        </Link>
      </div>
    );
};

export default JobDetails;