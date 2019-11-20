import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { API_KEY_GOOGLE_MAPS } from '../../../config/config'
import InfoWindowEx from "./InfoWindowEx";
import Imagenes from '../../../common/Imagenes'
import Span from '../../../common/Span'
import { Row } from 'reactstrap';

class Maps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedAccident: {}
    };
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedAccident: props.accident_,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  render() {
    return (
      <div className="animated fadeIn" style={{marginTop: '-23px'}}>
        <Row>
          <Map google={this.props.google} zoom={16} initialCenter={this.props.center}>
            {this.props.accidents.map((accident, i) => {
              return (
                <Marker
                  onClick={this.onMarkerClick}
                  key={accident.idpetaccident}
                  accident_={accident}
                  position={{ lat: accident.latitude, lng: accident.longitude }}
                />
              );
            })}
            <InfoWindowEx marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
              <div className='container'>
                <div className='row'>
                  <div className='col-2'>
                    <Imagenes src={'../../assets/img/pets/' + this.state.selectedAccident.photoApprove} alt='Imagen' color={this.state.selectedAccident.color}/>
                  </div>
                  <div className='col-10'>
                    <h5>{this.state.selectedAccident.title}</h5>
                    <Span text={this.state.selectedAccident.lastSeen}/>
                    <br/><br/>
                    Autor: {this.state.selectedAccident.firstName + ' ' + this.state.selectedAccident.lastName}
                    <br/>
                    Tipo de accidente: <strong>{this.state.selectedAccident.accidentType}</strong>
                    <br/>
                    Grado de accident: <Span text={this.state.selectedAccident.dangerLevel} style={{color: `${this.state.selectedAccident.color}`}}/>
                  </div>
                  <Span text='Ver más...' className='pointer'/>
                </div>
              </div>
            </InfoWindowEx>
          </Map>
        </Row>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: API_KEY_GOOGLE_MAPS
})(Maps);
