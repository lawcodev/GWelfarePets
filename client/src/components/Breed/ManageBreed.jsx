import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row, FormGroup } from 'reactstrap';
import Label from '../../common/Label'
import Link from '../../common/Link'
import Icon from '../../common/Icon'
import TextFieldSearch from '../../common/TextFieldSearch'
import { HandleBreedGetAll } from './services/breed.services'

const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

class ManageBreed extends Component {

  constructor(props) {
    super(props)
    this.state = {
      breeds: [], breedsBackUp: [], ok: false, isFetch: false
    }
  }
  async componentDidMount () {
    const responseJson = await HandleBreedGetAll()
    this.setState({ 
      breeds: responseJson.data, breedsBackUp: responseJson.data, ok: responseJson.status, isFetch: false
    })    
  }
  //#region Funciones para redireccionar
  fuctionRedirect(nameRedirect) {
    this.props.history.push(nameRedirect)
  }
  render() {
    const { breeds, isFetch, ok } = this.state
    if(isFetch && ok === 200) return loading()
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <Icon className='fa fa-align-justify'/>
              <Label text='Gestión de razas'/>
            </CardHeader>
            <CardBody>
              <FormGroup row>
                <Col xs="4" md="8">
                  <TextFieldSearch value={this.state.text} onChange={(text) => this.functionPetsFilter(text)}/>
                </Col>
              </FormGroup>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead className="thead-light">
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      breeds.length > 0 ? breeds.map(breed => {
                        return (
                          <tr key={breed.idbreed}>
                            <td>{breed.idbreed}</td>
                            <td>{breed.name}</td>
                            <td>
                              <Link className='btn btn-success' icon='fa fa-search-plus' onClick={() =>this.functionClickOpen(breed.idbreed)}/>
                              <Link className='btn btn-danger'  icon='fa fa-trash-o' onClick={() =>this.handleDeletePet(breed.idbreed)}/>
                              {/* <Link className='btn btn-info' icon='fa fa-edit' onClick={() =>this.handleEditPet(breed.idbreed)}/> */}
                            </td> 
                          </tr>
                        )
                      }):
                      <tr>
                        <td>
                          <Label text='No hay datos para mostrar...'/>
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
              <Link className='btn btn-success' text='Nuevo' onClick={() => this.fuctionRedirect('/razas/nuevo')}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default ManageBreed