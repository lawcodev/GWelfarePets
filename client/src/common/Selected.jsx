import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: '0', label: 'Tipo de accidente' },
  { value: '1', label: 'Perdida - Desaparición' },
  { value: '2', label: 'Maltrato - Abuso' },
  { value: '3', label: 'Raptación' },
  { value: '4', label: 'Envenanimiento' }
]

class Selected extends Component {
  handleChange(selectedValue){
    console.log(selectedValue);
  }
  render() {
    return(
      <Select options={options} onChange={this.props.handleChange} defaultValue={options[0]}
      />
    )
  }
}
export default Selected