import React, { Component } from 'react'
import Map from './Map'

const data = [
  {
    id: 1,
    name: "Paquete",
    title: "¡Ayuda me perdí!",
    lat: -8.1268394000,
    lng: -79.0305921000,
  },
  {
    id: 2,
    name: "Dedo",
    title: "¡Ayuda me perdí 2!",
    lat: -8.1298394000,
    lng: -79.0405921000,
  },
];

class LostPetsMaps extends Component {
  render() {
    return(
      <Map places={data} center={{ lat: -8.1268394000, lng: -79.0305921000 }} />
    )
  }
}
export default LostPetsMaps