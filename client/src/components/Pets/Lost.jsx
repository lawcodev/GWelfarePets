import React, { Component } from 'react';
import { handleGetPet } from '../../services/petsService';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Lost extends Component {
  constructor(props){
    super(props)
    this.state = {
      pets: [],
      isFetch: true,
      ok: Number,
    }
  }
  async componentDidMount(){
    const responseJson = await handleGetPet()
    this.setState({ pets: responseJson.data, ok: responseJson.status, isFetch: false})
  }
  render() {
    const { pets, isFetch, ok } = this.state
    if(isFetch && ok == 200) return 'Loading...'
    return(
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Mascotas
            </CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Edad</th>
                    <th>Color</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    pets.map(pet => {
                      return (
                        <tr>
                          <td>{pet.id}</td>
                          <td>{pet.name}</td>
                          <td>{pet.description}</td>
                          <td>{pet.age} años</td>
                          <td>{pet.color}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default Lost;
