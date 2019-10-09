import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { handleCountLostPet } from '../Pets/services/petservice'
import { COLOR_PRIMARY } from '../../config/config'
import CardView from '../../common/CardView'
import AuthService from '../../config/token';

const loading = () => <div className="animated fadeIn pt-1 text-center">Cargando...</div>

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countLostPet:''
    }
    this.Auth = new AuthService();
  }
  async componentDidMount() {
    const responseCountLostPet = await handleCountLostPet()
    this.setState({ countLostPet: responseCountLostPet.data.count, isFetch: false})
    if(!this.Auth.loggedIn()) {
      this.props.history.replace('/login')
    }
    else if(this.Auth.authorization() == false) {
      this.props.history.replace('/401')
    }
  }
  render() {
    const {countLostPet} = this.state
    return (
      <div className="animated fadeIn">
        {/* Cardview - contadores */}
        <Row>
          <CardView lg='3' className='text-white bg-warning' text='MASCOTAS PERDIDAS' results={countLostPet === 0 ? '0' : countLostPet}/>
          <CardView lg='3' className='text-white bg-danger' text='MASCOTAS MALTRATADAS' results={countLostPet === 0 ? '0' : countLostPet}/>
          <CardView lg='3' className='text-white' style={{background: `${COLOR_PRIMARY}`}} text='MASCOTAS RAPTADAS' results={countLostPet === 0 ? '0' : countLostPet}/>
          <CardView lg='3' className='text-white bg-success' text='MASCOTAS ADOPTADAS' results={countLostPet === 0 ? '0' : countLostPet}/>
          <CardView lg='3' className='text-black' text='MASCOTAS SIN ADOPTAR' results={countLostPet === 0 ? '0' : countLostPet}/>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
