import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { API_KEY_GOOGLE_MAPS } from '../../config/config'
import InfoWindowEx from "./InfoWindowEx";

class LostPetsMaps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props.place_,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  showDetails = place => {
    console.log(place);
  };
  render() {
    return (
      <Map google={this.props.google} zoom={16} initialCenter={this.props.center}>
        {this.props.places.map((place, i) => {
          return (
            <Marker
              onClick={this.onMarkerClick}
              key={place.id}
              place_={place}
              position={{ lat: place.lat, lng: place.lng }}
            />
          );
        })}
        <InfoWindowEx marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
          <div>
            <img src={'../../assets/img/avatars/10.jpg'} width="100px" className="img-circle" alt='Imagen'/>
            <h2>{this.state.selectedPlace.name}</h2>
            <span>{this.state.selectedPlace.title}</span>
          </div>
        </InfoWindowEx>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: API_KEY_GOOGLE_MAPS
})(LostPetsMaps);
