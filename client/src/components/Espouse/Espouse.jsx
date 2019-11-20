import React, { Component } from 'react'
import Header from '../Header/Header'
import PetsForAdoption from './PetsForAdoption'

class Espouse extends Component {
  state = {
    pets: []
  }
  onHome(e) {
    e.preventDefault()
    this.props.history.push('/')
  }
  onSignIn(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }
  onRedirectEspouse(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }
  onRedirectQuestion(e) {
    e.preventDefault()
    this.props.history.push('/faq')
  }
  functionRedirect(nameRedirect) {
    this.props.history.push(nameRedirect)
  }
  async handleDetailPet(id, nameRedirect) {
    this.functionRedirect(`${nameRedirect}${id}`)
  }
  render() {
    return(
      <React.Fragment>
        <Header onHome={e=>this.onHome(e)} onSignIn={e=>this.onSignIn(e)} onRedirectEspouse={e=>this.onRedirectEspouse(e)} onRedirectQuestion={e=>this.onRedirectQuestion(e)}/>
        <PetsForAdoption url='/adopta/'/>
      </React.Fragment>
    )
  }
}

export default Espouse