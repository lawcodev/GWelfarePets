import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Row,
} from 'reactstrap';
import Strong from '../../common/Strong'
import Label from '../../common/Label'
import Input from '../../common/Inputs'
import FormTextMessage from '../../common/FormTextMessage'
import Icon from '../../common/Icon'
import { HandlePetCreate } from './services/Pets.services'

class NewPet extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      id: 0,
      name: '',
      description: '',
      age: 0,
      genre:0,
      error: false,
      file: '',
      nameImage: ''
    };
    this.handleNewPet = this.handleNewPet.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  //Ciclo de vida del component
  componentDidMount () {
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  // Capturamos el valor de cada input 
  handleChange (e) {
    e.preventDefault()
    const { name, description, age, genre, value } = e.target
    this.setState({
      [name]: value,
      [description]: value,
      [age]: value,
      [genre]: value
    })
  }
  handleImageChange = (e) => {
    let file = e.target.files[0]
    const { name, type, size } = file
    console.log(name + type + size);
  }
  //#region Funciones para redireccionar
  functionRedirect(nameRedirect) {
    this.props.history.push(nameRedirect)
  }
  //Funciones principales
  async handleNewPet (e) {
    e.preventDefault()
    const newPet = {
      name: this.state.name,
      description: this.state.description,
      age: this.state.age,
      genre: this.state.genre,
    }    
    if (!newPet.genre || newPet.name === '') {
      alert('Ingrese los campos necesarios')
    }
    else if (newPet.age < 0) {
      alert('La edad es inválida, no puede ser menor a 1')
    }
    else {
      alert('Mascota agregada con éxito')
      await HandlePetCreate(newPet) // await, debido a que es asíncrono, se va a tardar algo en procesar.
      this.functionRedirect('/mascotas') // redirecciona a la lista de mascotas
    }
    console.log(newPet);
  }
  render() {
  
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <Strong text='Registro de mascotas'/>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleNewPet} className="form-horizontal">
                  {/* Nombres - Input */}
                  <FormGroup row>
                    <Col md="1">
                      <Label htmlFor="text-input" text='Nombre: '/>
                    </Col>
                    <Col xs="12" md="6">
                      <Input type='text' name='name' onChange={this.handleChange} />
                      <FormTextMessage color='muted' text='Ingrese el nombre de su mascota'/>
                    </Col>
                  </FormGroup>
                  {/* Descripción - Input */}
                  <FormGroup row>
                    <Col md="1">
                      <Label htmlFor="textarea-input" text='Descripción: '/>
                    </Col>
                    <Col xs="12" md="6">
                      <Input type='textarea' name='description' onChange={this.handleChange} rows="3"/>
                      <FormTextMessage color='muted' text='Ingrese la descripción de la mascota'/>
                    </Col>
                  </FormGroup>
                  {/* Años - Input */}
                  <FormGroup row>
                    <Col md="1">
                      <Label htmlFor="textarea-input" text='Edad: '/>
                    </Col>
                    <Col xs="12" md="3">
                      <Input type='number' name='age' onChange={this.handleChange}/>
                      <FormTextMessage color='muted' text='Ingrese la edad de la mascota'/>
                    </Col>
                  </FormGroup>
                  {/* Género - Input */}
                  <FormGroup row>
                    <Col md="1">
                      <Label htmlFor="textarea-input" text='Género: '/>
                    </Col>
                    <Col xs="12" md="3">
                      <select name='genre' onChange={this.handleChange}>
                        <option defaultValue value='0'>Seleccione</option>
                        <option value='2'>Hembra</option>
                        <option value='3'>Macho</option>
                      </select>
                      <FormTextMessage color='muted' text='Ingrese la edad de la mascota'/>
                    </Col>
                  </FormGroup>
                  {/* Fotos - Input */}
                  <FormGroup row>
                    <Col md="1">
                      <Label htmlFor="file-input" text='Foto:'/>
                    </Col>
                    <Col xs="12" md="4">
                      <Input type='file' onChange={this.handleImageChange} name='file'/>
                    </Col>
                  </FormGroup>
                  <Button type="submit" className="btn btn-primary" size="lm" color="primary"><Icon className='fa fa-save'/> Guardar</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewPet
