import React, { Component } from 'react'
import { PetsGetAll } from '../Pets/action/petAction'
import TitleBarGridList from '../../common/TitlebarGridList'
import { connect } from 'react-redux';

class GetPetsLost extends Component { 
  async componentDidMount() {
    await this.props.PetsGetAll()
  }
  render() {
    const { petsListLost } = this.props
    return(
      <TitleBarGridList petsListLost={petsListLost} headTitle={'Ultimas publicaciones de mascotas perdidas'}/>
    )
  }
}
const mapStateToProps = state => ({
  petsListLost: state.pets.pets
})
export default connect(mapStateToProps, { PetsGetAll })(GetPetsLost);