import "./JobCard.css";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaMoneyBillWave,
  FaLaptop,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const JobCard = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.length === 0 ? (
        <p className="no-jobs">No jobs found.</p>
      ) : (
        jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-header">
              <div className="job-info">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-company">
                  <FaBuilding /> {job.company_name}
                </p>
              </div>
              {job.logo_url && (
                <img
                  src={job.logo_url}
                  alt={job.company_name}
                  className="company-logo"
                />
              )}
            </div>

            <div className="job-meta">
              {job.work_from_home ? (
                <span className="meta-item">
                  <FaLaptop /> Work From Home
                </span>
              ) : (
                job.location_names && (
                  <span className="meta-item">
                    <FaMapMarkerAlt /> {job.location_names.join(", ")}
                  </span>
                )
              )}

              {job.start_date && (
                <span className="meta-item">
                  <FaCalendarAlt /> {job.start_date} -{" "}
                  {job.end_date || "Present"}
                </span>
              )}

              {job.duration && (
                <span className="meta-item">
                  <FaClock /> {job.duration}
                </span>
              )}

              {job.stipend?.salary && (
                <span className="meta-item">
                  <FaMoneyBillWave /> {job.stipend.salary}
                </span>
              )}
            </div>

            <div className="job-footer">
              <span className="job-type">Internship</span>
              {job.is_actively_hiring && (
                <span className="hiring-badge">Actively Hiring</span>
              )}
              <a
                href={`https://internshala.com/${job.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="apply-link"
              >
                Apply Now <FiExternalLink className="link-icon" />
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobCard;
