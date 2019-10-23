import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: '0', label: 'Nivel de peligro' },
  { value: '1', label: 'Leve' },
  { value: '3', label: 'Peligroso' },
]

class SelectedDanger extends Component {
  render() {
    return(
      <Select options={options} onChange={this.props.handleChangeDanger} defaultValue={options[0]}/>
    )
  }
}
export default SelectedDanger