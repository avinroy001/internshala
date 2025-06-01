import './JobCard.css';

const JobCard = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-header">
              <div>
                <h3 className="job-title">{job.title}</h3>
                <p className="job-company">{job.company_name}</p>
              </div>
              {job.logo_url && (
                <img src={job.logo_url} alt={job.company_name} className="company-logo" />
              )}
            </div>

            <div className="job-meta">
              {job.work_from_home ? (
                <span className="meta-item">🏠 Work From Home</span>
              ) : (
                <span className="meta-item">📍 {job.location_names?.join(', ')}</span>
              )}
              {job.start_date && (
                <span className="meta-item">📅 {job.start_date} - {job.end_date}</span>
              )}
              {job.duration && (
                <span className="meta-item">⏱️ {job.duration}</span>
              )}
              {job.stipend?.salary && (
                <span className="meta-item">💰 {job.stipend.salary}</span>
              )}
            </div>

            <div className="job-footer">
              <span className="job-type">Internship</span>
              {job.is_actively_hiring && <span className="hiring-badge">Actively hiring</span>}
              <a
                href={`https://internshala.com/${job.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="apply-link"
              >
                Apply Now →
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobCard;
