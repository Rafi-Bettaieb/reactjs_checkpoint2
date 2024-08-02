import React from 'react';
import Player from './Player';
import players from './players';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayersList = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col xs={12} md={4} className="d-flex justify-content-center" key={index}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
