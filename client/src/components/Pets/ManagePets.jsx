import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, FormGroup } from 'reactstrap';
import Label from '../../common/Label'
import Links from '../../common/Link'
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
import { COLOR_SECONDARY } from '../../config/config'
// Con redux
import { connect } from 'react-redux';
import { PetsGetAll, PetDeleteAll, PetGetById } from './action/petAction'

const loading = () => <div className="animated fadeIn pt-1 text-center">Cargando...</div>
const notFound = () => <div className="animated fadeIn pt-1 text-center">No hay datos para mostrar...</div>

class ManagePets extends Component {
  constructor(props){
    super(props)
    this.state = {
      pets: [], petsBackUp: [], pet: Object, isFetch: true, ok: Number, open: false, setOpen: false, redirect: false, hembras: 0, machos: 0,
      index: [], yearsAndMounths: '', countPet: 0, inMount: false
    }    
  }
  //#region Métodos del consumo del webservice | Ciclo de vida de un componente
  async componentDidMount() { // Cuando el componente es montado
    this.inMount = true
    if(this.inMount)
      this.handleGetAllPet()
  }
  componentWillUnmount() { // Cuando el componente es desmontado
    this.inMount = false
  }
  async handleGetAllPet() { // Función async de listar de todas las mascotas
    const pets = await this.props.PetsGetAll()
    this.setState({
      pets: pets.payload,
      petsBackUp: pets.payload
    })
  }
  async handleDeletePet(id) { // Eliminar mascota
    await this.props.PetDeleteAll(id)
    await this.handleGetAllPet()
  }
  async handleDetailPets(id) { // Detalle de mascota
    const detail = await this.props.PetGetById(id)
    this.setState({
      pet: detail.payload,
    }) 
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
  //funcion para realizar la búsqueda.
  functionPetsFilterSearch(e){
    var inputSearch = e.target.value // Se captura el valor de la caja de texto
    const petsBackUp = this.state.petsBackUp // Se traen los datos de todas las mascotas almacenadas en la lista auxiliar.
    const petsFilterSearchPets = petsBackUp.filter(function(pet) {
      const petName = pet.petName
      const description = pet.description
      const genre = pet.genre
      const fieldSearch = petName +' '+description+' '+genre
      const inputSearchPets = inputSearch
      return fieldSearch.indexOf(inputSearchPets) > -1
    })
    this.setState({ pets: petsFilterSearchPets })
  }
  render() {
    const { pet, open, pets } = this.state
    return(
      <Row>
        <Col>
          <Row>
            <CardView lg='2' className='text-white bg-primary' genre='HEMBRAS' results={pets.length}/>
            <CardView lg='2' className='text-white bg-primary' genre='MACHOS' results={pets.length}/>
          </Row>
          <Card>
            <CardHeader>
              <Icon className='fa fa-align-justify'/>
              <Label text='Gestión de Mascotas'/>
            </CardHeader>
            <CardBody>
              <FormGroup row>
                <Col xs="4" md="8">
                  <TextFieldSearch value={this.state.text} onChange={(text) => this.functionPetsFilterSearch(text)}/>
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
                              <button className='btn btn-warning' onClick={() =>this.functionClickOpen(pet.idpet)}> <i className="fa fa-search-plus"></i></button>
                              <button className='btn btn' style={{backgroundColor: `${COLOR_SECONDARY}`, color: 'white'}} onClick={() =>this.handleDeletePet(pet.idpet)}><i className='fa fa-trash'></i></button>
                            </td> 
                          </tr>
                        )
                      }): notFound()
                    }
                  </tbody>
                </table>
              </div>
              {
                pet !== null ?
                <Dialog open={open} onClose={() => this.functionClose()}>
                  <DialogTitle id="alert-dialog-title"><Label text='Detalle de la mascota'/></DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <img src={'../../assets/img/pets/' + pet.photo} alt={pet.name} width='220px'/><br/><br/>
                      <Label text={'Nombre: ' + pet.petName}/><br/>
                      <Label text={'Edad: '}/>&nbsp;
                      <Label text={ pet.years > 1 ? pet.years + ' año(s) y ': pet.years + ' año y' }/>&nbsp;
                      <Label text={ pet.mounths > 1 ? pet.mounths + ' mes(es)': pet.mounths + ' mes' }/><br/>
                      <Label text={'Descripción: ' + pet.description}/><br/>
                      <Label text={'Género: ' + pet.genre}/><br/>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Buttons onClick={() =>this.functionClose()} color='danger' text='Cerrar'/>
                  </DialogActions>
                </Dialog> : loading()
              }
              {/* Redirect crear */}
              <Links className='btn btn-success' icon='fa fa-plus' onClick={() =>this.functionRedirect('/mascotas/nuevo')} text='Agregar'/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
const mapStateToProps = state => ({
  pets: state.pets.pets
})
export default connect(mapStateToProps, { PetsGetAll, PetDeleteAll, PetGetById })(ManagePets);