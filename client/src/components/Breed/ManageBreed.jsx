import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { BreedsGetAll } from './action/breedAction' // acciones de cada componente
import { connect } from 'react-redux';
import Label from '../../common/Label'
import Link from '../../common/Link'
import Icon from '../../common/Icon'

const loading = () => <div className="animated fadeIn pt-1 text-center">Cargando...</div>

class ManageBreed extends Component {
  state = {
    breeds: []
  }
  async componentDidMount () {
    const breeds = await this.props.BreedsGetAll()
    this.setState({
      breeds: breeds.payload
    })
  }
  //#region Funciones para redireccionar
  fuctionRedirect(nameRedirect) {
    this.props.history.push(nameRedirect)
  }
  render() {
    const { breeds } = this.state
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <Icon className='fa fa-align-justify'/>
              <Label text='Gestión de razas'/>
            </CardHeader>
            <CardBody>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead className="thead-light">
                    <tr>
                      <th>N°</th>
                      <th>Nombre</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      breeds.length > 0 ? breeds.map((breed, index) => {
                        return (
                          <tr key={breed.idbreed}>
                            <td>{index + 1}</td>
                            <td>{breed.name}</td>
                            <td>
                              <Link className='btn btn-success' icon='fa fa-search-plus' onClick={() =>this.functionClickOpen(breed.idbreed)}/>
                              <Link className='btn btn-danger' icon='fa fa-trash-o' onClick={() =>this.handleDeletePet(breed.idbreed)}/>
                            </td> 
                          </tr>
                        )
                      }): loading()
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
const mapStateToProps = state => ({
  breeds: state.breeds.breeds
})
export default connect(mapStateToProps, { BreedsGetAll })(ManageBreed);