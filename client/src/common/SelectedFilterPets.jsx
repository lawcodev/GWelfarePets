import React from 'react'
import Select from 'react-select'

const SelectedFilterPets = (props) => {
  return(
    <Select options={props.options} onChange={props.handleChange} defaultValue={props.options[0]}
    />
  )
}
export default SelectedFilterPets