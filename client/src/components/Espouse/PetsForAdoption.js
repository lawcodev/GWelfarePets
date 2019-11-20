import React, { useEffect, useState } from 'react';
import { PetsGetAll } from '../Pets/action/petAction'
import { withRouter } from "react-router-dom"; // Componente de orden superior
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import CardImage from '../../common/CardImage'
import ProgressCircle from '../../common/ProgressCircle'
import H2 from '../../common/H2'
import H4 from '../../common/H4'
import { COLOR_PRIMARY } from '../../config/config'
import SelectedFilterPets from '../../common/SelectedFilterPets'
// Hook para el renderizado de todas las mascotas en adopción
const useFetchRedux = (props) => {
  const [data, setData] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const data = await props.PetsGetAll()
      setData(data.payload)
    }
    fetchData()
  })
  return { data } 
}
const optionsSexo = [
  { value: '0', label: 'Género' },
  { value: '1', label: 'Hembra' },
  { value: '2', label: 'Macho' },
]
const optionsSize = [
  { value: '0', label: 'Tamaño' },
  { value: '1', label: 'Pequeño' },
  { value: '2', label: 'Mediano' },
  { value: '3', label: 'Grande' },
]
const optionsAge = [
  { value: '0', label: 'Edad aprox.' },
  { value: '1', label: '3 - 6 meses' },
  { value: '2', label: '6 - 1 año' },
  { value: '3', label: '1 - 3 años' },
]
const optionsHairType = [
  { value: '0', label: 'Tipo de pelo' },
  { value: '1', label: 'Corto' },
  { value: '2', label: 'Largo' },
]
const optionsActivityLevel = [
  { value: '0', label: 'Nivel de actividad'},
  { value: '1', label: 'Bajo' },
  { value: '2', label: 'Medio' },
  { value: '3', label: 'Alto' },
]
const optionsRequiredSpace = [
  { value: '0', label: 'Espacio abierto requerido'},
  { value: '1', label: 'No es necesario' },
  { value: '2', label: 'Pequeño' },
  { value: '3', label: 'Mediano' },
  { value: '4', label: 'Grande' },
]

const PetsForAdoption = (props) => {
  const { data } = useFetchRedux(props)

  const handleDetailPet = (nameRedirect, id) => {
    props.history.push(`${nameRedirect}${id}`)
  }
  return(
    <div className="adop container-fluid">
      <div className="sponsor-bar" style={{background: COLOR_PRIMARY}} >
        <H2 text='ADOPTA UNA MASCOTA'/>
      </div>
      <br/> 
      <H4 text='¡Encuentra a tu compañero ideal!'/>
      <div className='row'>
        <div className='col'>
          <SelectedFilterPets options={optionsSexo}/>
        </div>
        <div className='col'>
          <SelectedFilterPets options={optionsSize}/>
        </div>
        <div className='col'>
          <SelectedFilterPets options={optionsAge}/>
        </div>
        <div className='col'>
          <SelectedFilterPets options={optionsHairType}/>
        </div>
        <div className='col'>
          <SelectedFilterPets options={optionsActivityLevel}/>
        </div>
        <div className='col'>
          <SelectedFilterPets options={optionsRequiredSpace}/>
        </div>
      </div>
      <br/>
      <Row>
        {
          data.length > 0 ? data.map((pet) => {
            return(
              <React.Fragment key={pet.idpet}>
                <Col xs="12" sm="4" md="3" >
                  <CardImage title={pet.petName.toUpperCase()} 
                  genre={pet.genre + ' | '} years={pet.years > 1 ? pet.years + ' año(s) y ': pet.years + ' año y'}
                  mounths={pet.mounths > 1 ? pet.mounths + ' mes(es)': pet.mounths + ' mes'}
                  img={'../../assets/img/pets/' + pet.photo}
                  onClick={() => handleDetailPet(props.url, pet.idpet)}
                  statusPet = {pet.statusPet}
                  color = {pet.color}
                  />
                </Col>
              </React.Fragment>
            )
          }): <ProgressCircle/>
        }
      </Row>  
    </div>
  )
}
const mapStateToProps = state => ({
  pets: state.pets.pets
})
export default withRouter(connect(mapStateToProps, { PetsGetAll })(PetsForAdoption))