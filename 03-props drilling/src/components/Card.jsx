import "../styles/Card.css";

function Card({
  company,
  datePosted,
  post,
  tag1,
  tag2,
  brandLogo,
  pay
}) {
  return (
    <div className="job-card">
      {/* Header */}
      <div className="card-header">
        <img src={brandLogo} alt={company} className="company-logo" />
        <div>
          <h3 className="company-name">{company}</h3>
          <p className="date">{datePosted}</p>
        </div>
      </div>

      {/* Body */}
      <h2 className="job-title">{post}</h2>

      <div className="tags">
        <span>{tag1}</span>
        <span>{tag2}</span>
      </div>

      {/* Footer */}
      <div className="card-footer">
        <p className="pay">{pay}</p>
        <button className="apply-btn">Apply</button>
      </div>
    </div>
  );
}

export default Card;
