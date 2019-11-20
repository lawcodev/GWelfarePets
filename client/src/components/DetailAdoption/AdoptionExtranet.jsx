import React, { Component } from 'react'
import Header from '../Header/Header'
import { connect } from 'react-redux';
import { PetGetById } from '../Pets/action/petAction';
import Progress from '../../common/Progress'
import DetailPetAdoptionList from './DetailPetAdoptionList'

const loading = () => <div className="animated fadeIn pt-1 text-center"><Progress/></div>

class AdoptionExtranet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      pet: Object,
      pets: [],
      open: false
    }
  }
  async componentDidMount() {
    const idpet = this.props.match.params.id
    const detailPet = await this.props.PetGetById(idpet)
    this.setState({
      pet: detailPet.payload,
    })
    this.setState({
      id: this.state.pet.idpet
    })
    // this.replaceTitle()
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
    this.props.history.push('/adopta')
  }
  onRedirectQuestion(e) {
    e.preventDefault()
    this.props.history.push('/faq')
  }
  handleDetailPet() {
    this.setState({
      id: this.state.id + 1
    })
    this.props.history.push(`/adopta/${this.state.id}`)
  }
  render() {
    const { pet } = this.state
    return(
      <React.Suspense fallback={loading()}>
        <Header onHome={e=>this.onHome(e)} onSignIn={e=>this.onSignIn(e)} onRedirectEspouse={e=>this.onRedirectEspouse(e)} onRedirectQuestion={e=>this.onRedirectQuestion(e)}/>
        <DetailPetAdoptionList pet={pet}/>
      </React.Suspense>
    )
  }
}
const mapStateToProps = state => ({
  pets: state.pets.pets
})
export default connect(mapStateToProps, { PetGetById })(AdoptionExtranet);