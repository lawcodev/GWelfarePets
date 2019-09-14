import { handleGetPet, handleDeletedPet, handleDetailPet} from './services/Pets.services';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import Label from '../../common/Label'
import Link from '../../common/Link'
import Icon from '../../common/Icon'
import Span from '../../common/Span'
import Buttons from '../../common/Buttons'
import CardView from '../../common/CardView'
import React, { Component } from 'react';
import { Dialog } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

class Lost extends Component {
  constructor(props){
    super(props)
    this.state = {
      pets: [], pet: Object, isFetch: true, ok: Number, open: false, setOpen: false
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
  async handleDetailPets(id){
    const responseJson = await handleDetailPet(id)
    this.setState({ pet: responseJson.data, ok: responseJson.status, isFetch: false})
  }
  async handleEditPet(id) {
    console.log(id);    
  }
  async handleClickOpen(id) {
    if (!this.state.open) {
      this.setState({open: true})
      this.handleDetailPets(id)
    }
  }
  async handleClose() {
    if (this.state.open) {
      this.setState({open: false})
    }
  }
  render() {
    const { pets, isFetch, ok, pet, open} = this.state
    if(isFetch && ok === 200) return loading()
    return(
      <Row>
        <Col>
          <Row>
            <CardView lg='2' className='text-white bg-success' genre='HEMBRAS' results='0'/>
            <CardView lg='2' className='text-white bg-success' genre='MACHOS' results='0'/>
            <CardView lg='2' className='text-white bg-success' genre='ACTIVOS' results='0'/>
          </Row>
          <Card>
            <CardHeader>
              <Icon className='fa fa-align-justify'/>
              <Label text='Gestión de Mascotas'/>
            </CardHeader>
            <CardBody>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead className="thead-light">
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Descripción</th>  
                      <th>Edad</th>
                      <th>Color</th>
                      <th>Estado</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      pets.length > 0 ? // Validamos si hay elementos en lista.
                        pets.map(pet => {
                          return (
                            <tr key={pet.id}>
                              <td>{pet.id}</td>
                              <td>{pet.name}</td>
                              <td>{pet.description}</td>
                              <td>{pet.age}</td>
                              <td>{pet.color}</td>
                              <td><Span className='badge badge-warning' text='Perdido'/></td>
                              <td>
                                <Link className='btn btn-success' icon='fa fa-search-plus' onClick={() =>this.handleClickOpen(pet.id)}/>
                                <Link className='btn btn-danger'  icon='fa fa-trash-o' onClick={() =>this.handleDeletePet(pet.id)}/>
                                <Link className='btn btn-info' icon='fa fa-edit' onClick={() =>this.handleEditPet(pet.id)}/>
                              </td>
                            </tr>
                          )
                        })
                      : 'No hay datos para mostrar...' // Al no existir elementos en la lista mostramos un mensaje ...
                    }
                  </tbody>
                </table>
              </div>
              {/* -- Dialog */}
              <Dialog open={open} onClose={() => this.handleClose()}>
                <DialogTitle id="alert-dialog-title"><Label text='Detalle de la mascota'/></DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <img src="http://1.bp.blogspot.com/-LRI8zWHEeFY/Uw5gbgnZaiI/AAAAAAAAFCE/tv_JV2lUprs/s1600/por+que+los+perros+comen+pasto.jpg" alt={pet.name}/><br/>
                      <Label text={'Nombre: ' + pet.name}/><br/>
                      <Label text={'Edad: ' + pet.age + ' años'}/><br/>
                      <Label text={'Descripción: ' + pet.description}/><br/>
                      <Label text={'Color: ' + pet.color}/><br/>
                      <Label text='Estado: '/><Span className='badge badge-warning' text='Perdido'/>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                  <Button onClick={() =>this.handleClose()} color="primary">
                    Cerrar
                  </Button>
                </DialogActions>
              </Dialog>
              {/* Botones */}
              <Buttons className='btn btn-success' text='Nuevo'/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default Lost;
