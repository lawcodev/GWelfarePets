import { handleGetPet, handleDeletedPet} from './services/ServicesPets';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import Label from '../../common/Label'
import Link from '../../common/Link'
import Icon from '../../common/Icon'
import React, { Component } from 'react';

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
  async handleDeletePet(id){
    const responseJson = await handleDeletedPet(id)
    this.setState({ response: responseJson.data, isFetch: false})
    this.componentDidMount()
  }
  render() {
    const { pets, isFetch, ok } = this.state
    if(isFetch && ok === 200) return 'Loading...'
    return(
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <Icon className='fa fa-align-justify'/>
              <Label text='Mascotas perdidas'/>
            </CardHeader>
            <CardBody>
              <table className="table table-striped table-bordered datatable dataTable no-footer">
                <thead className="thead-light">
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Descripción</th>  
                    <th>Edad</th>
                    <th>Color</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    pets.map(pet => {
                      return (
                        <tr key={pet.id}>
                          <td>{pet.id}</td>
                          <td>{pet.name}</td>
                          <td>{pet.description}</td>
                          <td>{pet.age} años</td>
                          <td>{pet.color}</td>
                          <td>
                            <Link type='button' className='btn btn-success' icon='fa fa-search-plus' href='https://www.redfazt.com'/>
                            <Link className='btn btn-danger' role='button' icon='fa fa-trash-o' url={() =>this.handleDeletePet(pet.id)}/>
                            <Link type='button' className='btn btn-info' icon='fa fa-edit' href='https://www.redfazt.com'/>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      
    )
  }
}
export default Lost;
