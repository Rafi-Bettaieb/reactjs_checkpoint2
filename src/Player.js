import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  const cardStyle = { width: '300px', margin: '10px' };
  const imageStyle = { height: '200px', width: '100%', objectFit: 'cover' };
  const textStyle = { fontSize: '14px', color: 'gray' };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} style={imageStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={textStyle}>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: "NA",
  age: "NA",
  image: "404 Not Found"
};

export default Player;
