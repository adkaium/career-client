import React from "react";
import {FiMapPin} from "react-icons/fi";
import {Link} from "react-router";

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
  // console.log(job);
  return (
    <div
      className="group w-[310px] h-[420px] border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col justify-between transition-all duration-300 
    bg-blue-50  hover:bg-white hover:text-black"
    >
      <div>
        {/* Logo + Company */}
        <div className="flex items-center gap-3 mb-4">
          <img
            className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xs"
            src={company_logo}
            alt=""
          />

          <div>
            <h3 className="font-semibold text-gray-800">{company}</h3>
            <p className="text-sm text-gray-400">FiMapPin {location}</p>
          </div>

          <span className="ml-auto text-green-500 text-xl">⚡</span>
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
            <button
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
          
          bg-sky-100 text-blue-200 
          group-hover:bg-blue-600 group-hover:text-white
        "
            >
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
