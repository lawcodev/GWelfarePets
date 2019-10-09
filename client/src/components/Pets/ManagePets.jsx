import React, { Component } from 'react';
import { HandlePetGetAll, HandlePetDelete, HandlePetGetById } from './services/petservice'; // Service
import { Card, CardBody, CardHeader, Col, Row, FormGroup } from 'reactstrap';
import Label from '../../common/Label'
import Link from '../../common/Link'
import Icon from '../../common/Icon'
import Span from '../../common/Span'
import TextFieldSearch from '../../common/TextFieldSearch'
import CardView from '../../common/CardView'
import Buttons from '../../common/Buttons'
import { Dialog } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// Cargar
const loading = () => <div className="animated fadeIn pt-1 text-center">Cargando...</div>

class ManagePets extends Component {
  constructor(props){
    super(props)
    this.state = {
      pets: [], petsBackUp: [], pet: Object, isFetch: true, ok: Number, open: false, setOpen: false, redirect: false, hembras: [], machos: [],
      index: [], yearsAndMounths: ''
    }    
  }
  //#region Métodos del consumo del webservice | Ciclo de vida de un componente
  async componentDidMount() {
    const responseJson = await HandlePetGetAll()
    this.setState({ 
      pets: responseJson, petsBackUp: responseJson, ok: responseJson.status
    })  
    this.functionCountMales()
    this.functionCountFemales()
  }
 
  async handleDeletePet(id){
    const responseJson = await HandlePetDelete(id)
    this.setState({ response: responseJson.data})
    this.componentDidMount()
  }
  async handleDetailPets(id){
    const responseJson = await HandlePetGetById(id)
    this.setState({ pet: responseJson[0], ok: responseJson.status})
  }
  async handleEditPet(id, nameRedirect) {
    this.functionRedirect(`${nameRedirect}${id}`)
    console.log(id + nameRedirect);    
  }
  //#region Funciones para abrir las ventanas modales
  functionClickOpen(id) {
    if (!this.state.open) {
      this.setState({open: true})
      this.handleDetailPets(id)
    }
  }
  functionClose() {
    if (this.state.open) {
      this.setState({open: false})
    }
  }
  //#region Funciones para redireccionar
  functionRedirect(nameRedirect) {
    this.props.history.push(nameRedirect)
  }
  //funciones del contador de mascotas de gènero macho y hembra
  functionCountMales (){
    let listMachos = this.state.pets.filter(pet => pet.genre === 'Macho')
    this.setState({machos: listMachos})
  }
  functionCountFemales (){
    let listHembras = this.state.pets.filter(pet => pet.genre === 'Hembra')
    this.setState({hembras: listHembras})
  }
  //funcion para realizar la búsqueda.
  functionPetsFilter(event){
    var inputSearch = event.target.value // Se captura el valor de la caja de texto
    const petsBackUp = this.state.petsBackUp // Se traen los datos de todas las mascotas almacenadas en la lista auxiliar.
    const petsFilter = petsBackUp.filter(function(pet) {
      const petName = pet.petName
      const description = pet.description
      const genre = pet.genre
      const fieldSearch = petName +' '+description+' '+genre
      const inputSearchPets = inputSearch
      return fieldSearch.indexOf(inputSearchPets) > -1
    })
    this.setState({ pets: petsFilter })
  }
  render() {
    const { pets, ok, pet, open, machos, hembras } = this.state
    if(ok === 200) return loading()
    return(
      <Row>
        <Col>
          <Row>
            <CardView lg='2' className='text-white bg-primary' genre='HEMBRAS' results={hembras.length}/>
            <CardView lg='2' className='text-white bg-primary' genre='MACHOS' results={machos.length}/>
          </Row>
          <Card>
            <CardHeader>
              <Icon className='fa fa-align-justify'/>
              <Label text='Gestión de Mascotas'/>
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
                      <th>N°</th>
                      <th>Nombre</th>
                      <th>Descripción</th>  
                      <th>Edad Aprox.</th>
                      <th>Estado</th>
                      <th>Género</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      pets.length > 0 ? pets.map((pet, index)=> {
                        return (
                          <tr key={pet.idpet}>
                            <td>{index + 1}</td>
                            <td>{pet.petName}</td>
                            <td>{pet.description}</td>
                            <td>
                              {pet.years > 1 ? pet.years + ' año(s) y ': pet.years + ' año y '}
                              {pet.mounths > 1 ? pet.mounths + ' mes(es)': pet.mounths + ' mes'}
                            </td>
                            <td><Span className='badge badge-success' text={pet.state.data ? 'Activo': ''}/></td>
                            <td>{pet.genre}</td>
                            <td>
                              <Link className='btn btn-warning' icon='fa fa-search-plus' onClick={() =>this.functionClickOpen(pet.idpet)}/>
                              <Link className='btn btn-danger'  icon='fa fa-trash-o' onClick={() =>this.handleDeletePet(pet.idpet)}/>
                              {/* <Link className='btn btn-info' icon='fa fa-edit' onClick={() =>this.handleEditPet(pet.idpet, 'mascotas/editar/')}/> */}
                            </td> 
                          </tr>
                        )
                      }):
                      <tr>
                        <td>
                          <Label text='Cargando datos...'/>
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
              <Dialog open={open} onClose={() => this.functionClose()}>
                <DialogTitle id="alert-dialog-title"><Label text='Detalle de la mascota'/></DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <img src="http://1.bp.blogspot.com/-LRI8zWHEeFY/Uw5gbgnZaiI/AAAAAAAAFCE/tv_JV2lUprs/s1600/por+que+los+perros+comen+pasto.jpg" alt={pet.name}/><br/>
                    <Label text={'Nombre: ' + pet.petName}/><br/>
                    <Label text={'Edad: ' + pet.age + ' años'}/><br/>
                    <Label text={'Descripción: ' + pet.description}/><br/>
                    <Label text={'Género: ' + pet.genre}/><br/>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Buttons onClick={() =>this.functionClose()} color='danger' text='Cerrar'/>
                </DialogActions>
              </Dialog>
              {/* Redirect crear */}
              <Link className='btn btn-success' icon='fa fa-plus' onClick={() =>this.functionRedirect('/mascotas/nuevo')} text='Agregar'/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default ManagePets