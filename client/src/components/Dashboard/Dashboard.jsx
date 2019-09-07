import React, { Component } from 'react';
import { Row } from 'reactstrap';
import CountLostPets from '../Pets/CountLostPets'
import CountRescuedPets from '../Pets/CountRescuedPets'
import CountPoisonedPets from '../Pets/CountPoisonedPets'

class Dashboard extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render() {
    return (
      <div className="animated fadeIn">
        {/* Cardview - contadores */}
        <Row>
          <CountLostPets/>
          <CountRescuedPets/>
          <CountPoisonedPets/>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
