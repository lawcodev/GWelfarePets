import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { handleCountLostPet } from '../Pets/services/pets.services'
import CardView from '../../common/CardView'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countLostPet:''
    }
  }
  async componentDidMount() {
    const responseCountLostPet = await handleCountLostPet()
    this.setState({ countLostPet: responseCountLostPet.data.count, isFetch: false})
  }
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    
    const {countLostPet} = this.state
    return (
      <div className="animated fadeIn">
        {/* Cardview - contadores */}
        <Row>
          <CardView lg='3' className='text-white bg-warning' text='MASCOTAS PERDIDAS' results={countLostPet === 0 ? '0' : countLostPet}/>
          <CardView lg='3' className='text-white bg-danger' text='MASCOTAS MALTRATADAS' results={countLostPet === 0 ? '0' : countLostPet}/>
          <CardView lg='3' className='text-white bg-primary' text='MASCOTAS RAPTADAS' results={countLostPet === 0 ? '0' : countLostPet}/>
          <CardView lg='3' className='text-white bg-success' text='MASCOTAS ADOPTADAS' results={countLostPet === 0 ? '0' : countLostPet}/>
          <CardView lg='3' className='text-black' text='MASCOTAS SIN ADOPTAR' results={countLostPet === 0 ? '0' : countLostPet}/>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
