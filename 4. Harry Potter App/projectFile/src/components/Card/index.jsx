import "./Card.css";

function Index({ id, house, image, name, actor, gender, yearOfBirth }) {
  return (
    <div key={id} className="card">
      <img
        className="image"
        src={`./images/houses/${house || "no-house"}.png`}
        alt={house}
      />
      <div className="profile-photo">
        <div>
          <img
            className="profile-image"
            src={image || "./images/profile-def.jpg"}
            alt={image || "default-profile"}
          />
        </div>
      </div>
      <div className="name">{name}</div>
      <div className="house">{house || "Unknown"}</div>
      <div className="information">
        <div className="box">
          <div>Actor: {actor}</div>
          <div>Gender: {gender}</div>
          <div>Age: {new Date().getFullYear() - yearOfBirth}</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
