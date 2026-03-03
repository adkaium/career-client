import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router';

const JobCard = ({job}) => {
    const {
      _id,
      title,
      location,
    
      description,
      company_logo,
      company,
      requirements,
      salaryRange,
    } = job;
    return (
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="flex itemx-center gap-2">
          <figure>
            <img src={company_logo} className="w-16" alt="Shoes" />
          </figure>
          <div>
            <h3>{company}</h3>
            <p className="flex items-center gap-2">
              <FiMapPin />
              {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            Salay: {salaryRange.min}-{salaryRange.max}
            {salaryRange.currency}
          </p>
          <p>{description}</p>
          <div className="card-actions">
            {requirements.map((skill, index) => (
              <div key={index} className="badge badge-outline">
                {skill}
              </div>
            ))}
          </div>
          <div className="card-actions justify-end">
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default JobCard;