import "../styles/Cards.css";

function Card(props) {

  return (
    <div className="dark-card">
      <h2 className="card-title">{props.user}</h2>
      <p className="card-role">Frontend Developer</p>

      <div className="card-divider"></div>
      <p className="card-text"><strong>Age:</strong>  {props.age}</p>
      <p className="card-text"><strong>Email:</strong> {props.email}</p>
      <p className="card-text"><strong>Location:</strong> India</p>
      <p className="card-text"><strong>Skills:</strong> HTML, CSS, JavaScript, React</p>

      <p className="card-footer">Open for internships & projects</p>
    </div>
  );
}

export default Card;
