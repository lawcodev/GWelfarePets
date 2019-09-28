import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { API_KEY_GOOGLE_MAPS } from '../../config/config'


class LostPetsMaps extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };
    return (
      <Map google={this.props.google} zoom={15} style={mapStyles} initialCenter={{ lat: -8.1268394, lng: -79.03059209999999}}>
        <Marker position={{ lat: -8.1268394, lng: -79.03059209999999}} title={'Jair Cruzado Sifuentes'}/>
        <Marker position={{ lat: -8.1268394, lng: -79.03059209999999}} title={'Jair Cruzado Sifuentes'}/>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: API_KEY_GOOGLE_MAPS
})(LostPetsMaps);
