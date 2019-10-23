import React, { Component } from 'react'
import Header from '../Header/Header'
import H1 from '../../common/H1'
import Tabs from '../../common/Tabs'
import Button from '../../common/Buttons'

const loading = () => <div className="animated fadeIn pt-1 text-center">Cargando...</div>

class DetailAdoption extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      pet: Object,
      pets: []
    }
  }
  async componentDidMount() {
    const idpet = this.props.match.params.id
    // const pet = await HandlePetGetById(idpet)
    // const list = await HandlePetGetAll()
    this.setState({
      id: idpet,
      // pet: pet[0],
    })
    this.setState({
      // pets: list
    })
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
  render() {
    const { pet } = this.state
    return(
      <React.Suspense fallback={loading()}>
        <Header onHome={e=>this.onHome(e)} onSignIn={e=>this.onSignIn(e)} onRedirectEspouse={e=>this.onRedirectEspouse(e)} onRedirectQuestion={e=>this.onRedirectQuestion(e)}/>
        <div className="wuf">
          <div className="container top">
            <div className="black-left">
              <div className="block-right">
                <H1 text={pet.petName}/>
                <table>
                  <tbody> 
                    <tr>
                      <th>Sexo</th>
                      <td>{pet.genre}</td>
                    </tr>
                    <tr>
                      <th>Edad apxo.</th>
                      <td>
                        {pet.years > 1 ? pet.years + ' año(s) y ': pet.years + ' año y '}
                        {pet.mounths > 1 ? pet.mounths + ' mes(es)': pet.mounths + ' mes'}
                      </td>
                    </tr>
                    <tr>
                      <th>Tamaño</th>
                      <td>{pet.size}</td>
                    </tr>
                    <tr>
                      <th>Peso aprox.</th>
                      <td>{pet.weight + 'kg'}</td>
                    </tr>
                    <tr>
                      <th>Tipo de pelo</th>
                      <td>{pet.hairType}</td>
                    </tr>
                    <tr>
                      <th>Nivel de actividad</th>
                      <td>{pet.activityLevel}</td>
                    </tr>
                    <tr>
                      <th>Espacio abierto requerido</th>
                      <td>{pet.aPreferences}</td>
                    </tr>
                    <tr>
                      <th>Puede estar solo</th>
                      <td>{pet.careState}</td>
                    </tr>
                  </tbody>
                </table>
                <br/>
                <div className="aboutdog mobile-only">
                  <table>
                    <tbody>
                      <tr>
                        <td><p>&iquest;Viste mis fotos? Me encantan porque han captado mi esencia, &iexcl;en todas sonr&iacute;o!. Soy un Wuf muy feliz, me llevo s&uacute;per bien con los Wufs del albergue, sin embargo ya es hora de cambiar tu vida humano, yo derrocho amor y te va a gustar.  Si me adoptas, llego a casa ba&ntilde;ado y equipado con 1 pack de galletas Cookie Dogster, 1 cama Dentitoy, 1 collar WUF, carnaza y mucho amor. &iexcl;Ya estoy listo para irme contigo!.</p></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="aboutdog">
                  <Tabs/>
                </div>
              </div>
              <div className="bigimcontent" style={{marginLeft:'-40px'}}>
                <img className="big" src={'../../assets/img/pets/' + pet.photo} width="400px" height="380px" alt='imagen'/>
              </div>
              <div className="text-left">
                <br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button text='¡ INSCRIBIRME EN LA LISTA DE ESPERA !' color='primary' variant='contained'/>
              </div>
            </div>
          </div>
        </div>
      </React.Suspense>
    )
  }
}
export default DetailAdoption