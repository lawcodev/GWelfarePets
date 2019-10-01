import React from 'react';
import { Jumbotron } from 'reactstrap';

const Jumbotrons = (props) => {
  return (
    <Jumbotron>
      <h1 className="display-3">{props.title}</h1>
      <p className="lead">{props.subtitle}</p>
      <hr className="mx-2" />
    </Jumbotron>
  );
};

export default Jumbotrons;