import React, { Component } from 'react';
import { handleCountLostPet } from '../../services/petsService'
import {
  ButtonGroup,
  Card,
  CardBody,
  Col,
  Row,
} from 'reactstrap';
import Label from '../../common/Label'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countPet: '',
      update: false
    };
  }
  async componentDidMount(){
    const response = await handleCountLostPet()
    this.setState({ countPet: response.data.count, isFetch: false})
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render() {
    const { countPet } = this.state
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="8" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <i className="icon-settings"></i>
                </ButtonGroup>
                <div className="text-value">{countPet == 0 ? 'Cantidad: ' + countPet : countPet +' Mascotas'}</div>
                <Label text='Mascotas perdidas'/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
