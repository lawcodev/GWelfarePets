import React from 'react'
import { H2, SelectedFilter } from '../../../../../common'
import { COLOR_SUCCESS } from '../../../../../config/config'
import PetStore from '../store/PetStore'

// Filtros
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
  { value: '1', label: '3 meses - 6 meses' },
  { value: '2', label: '1 año - 2 años' },
  { value: '3', label: '3 años - 4 años' },
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

const PetViewModel = () => {
  document.title = `Apadrinamiento | Geopetfare`;
  return(
    <div className="adop container-fluid">
      <div className="sponsor-bar" style={{background: COLOR_SUCCESS}} >
        <H2 text='APADRINA UNA MASCOTA'/>
      </div>
      <br/> 
      <div className='row'>
        <div className='col'>
          <SelectedFilter options={optionsSexo}/>
        </div>
        <div className='col'>
          <SelectedFilter options={optionsSize}/>
        </div>
        <div className='col'>
          <SelectedFilter options={optionsAge}/>
        </div>
        <div className='col'>
          <SelectedFilter options={optionsHairType}/>
        </div>
        <div className='col'>
          <SelectedFilter options={optionsActivityLevel}/>
        </div>
        <div className='col'>
          <SelectedFilter options={optionsRequiredSpace}/>
        </div>
      </div>
      <br/>
      <PetStore/>
    </div>
  )
}
export default PetViewModel