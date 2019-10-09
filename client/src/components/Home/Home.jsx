import React, { Component, Suspense } from 'react';
import { Row } from 'reactstrap'
import { AppHeader } from '@coreui/react';
import { AUTHENTICATION_LOGOUT } from '../../config/httpService'
import { handleCountLostPet } from '../Pets/services/petservice'
import { HandleAuthenticationById } from '../../components/Login/services/authHelper.services'
import { COLOR_PRIMARY } from '../../config/config'
import CardView from '../../common/CardView'
import Span from '../../common/Span'
import CardViewPostEsqueleton from '../../common/CardViewPostEsqueleton'
import CardViewPost from '../../common/CardViewPost'
import AuthService from '../../config/token';
import Box from '@material-ui/core/Box';
import ImagePetAdoption from '../../common/ImagePetAdoption'
import SpeedDialTooltipOpen from '../../common/SpeedDialTooltipOpen'
import TitlebarGridList from '../../common/TitlebarGridList'
import { HandlePetGetAll } from '../../components/Pets/services/petservice'
import ResponsiveDialog from '../../common/ResponsiveDialog';
import { geolocated, geoPropTypes } from '../../config/userPosition'
import { HandleAccidentCreate } from './services/accidents.services'
import Imagenes from '../../common/Imagenes'

//Constantes
const DefaultHeader = React.lazy(() => import('../../containers/DefaultLayout/DefaultHeader'));

const getDirection = (degrees, isLongitude) =>
  degrees > 0 ? (isLongitude ? "E" : "N") : isLongitude ? "W" : "S";

// Formato para los grados
const formatDegrees = (degrees, isLongitude) =>
  `${0 | degrees}° ${0 | (((degrees < 0 ? (degrees = -degrees) : degrees) % 1) * 60)}' ${0 |
    (((degrees * 60) % 1) * 60)}" ${getDirection(degrees, isLongitude)}`

/* Mensaje de saludo */
const Greeting = (props) => {
  let date = new Date()
  let greeting, quote, img
  let hours = date.getHours()
  if(hours < 12) {
      greeting = 'Buenos días'
      quote = 'Cada nuevo día es una oportunidad para cambiar tu vida.'
      img = '../../assets/img/greeting/park.png'
  } else if(hours >= 12 && hours <=18) {
      greeting = 'Buenas tardes'
      quote = 'Que esta tarde sea luz, bendita, iluminada, productiva y feliz.'
      img = '../../assets/img/greeting/desert.png'
  } else if(hours >=18 && hours <=24) {
      greeting = 'Buenas noches'
      quote = 'Las noches son la forma en que la vida dice que estás más cerca de tus sueños.'
      img = '../../assets/img/greeting/sea.png'
  }
  return(
    <div className="alert alert-dismissible greetalert" role="alert">
      <div>
        <div className="small-texts">{greeting}, {props.name}
          <img src={img} alt='Imagen'/>
        </div>
        <p>{quote}</p>
      </div>
    </div>
  )
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      countLostPet:'',
      person: Object,
      id: 0,
      greeting: '',
      quote: '',
      post: [],
      petsData:[],
      titlePost: '',
      descriptionPost: '',
      latitude:'',
      longitude:'',
      formatLatitude: '',
      formatLongitude: ''
    };
    this.Auth = new AuthService();
    this.handleOnChangeTitulo = this.handleOnChangeTitulo.bind(this)
    this.handleOnChangeDescription = this.handleOnChangeDescription.bind(this)
  }
  async componentDidMount() {
    const responseCountLostPet = await handleCountLostPet()
    this.setState({ countLostPet: responseCountLostPet.data.count, isFetch: false})
    if(!this.Auth.loggedIn())
      this.props.history.replace('/login');
    const profile = this.Auth.getProfile() // obtenemos el id de la sesión
    const user = await HandleAuthenticationById(profile.id)
    const petsData = await HandlePetGetAll() // cambiar con la lista de mascotas perdidas
    const list = ['1','2'] // cambiar con la lista de posts
    this.setState({
      id: profile.id,
      person: user,
      post: list,
      petsData: petsData,
    })
    console.log(formatDegrees(this.props.coords.longitude, false))    
    this.handlePosition()
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }
  loading = () => <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  async signOut(e) {
    e.preventDefault()
    await AUTHENTICATION_LOGOUT()
    this.props.history.push('/')
  }
  onSignAdmi(e) {
    e.preventDefault()
    this.props.history.push('/dashboard')
  }
  functionRedirect(nameRedirect) {
    this.props.history.push(nameRedirect)
  }
  onHandleDetail(e) {
    e.preventDefault()
    let id = this.state.id 
    this.functionRedirect('/perfil/'+id)
  }
  handleOnChangeTitulo(e) {
    e.preventDefault()
    this.setState({
      titlePost: e.target.value
    })
  }
  handleOnChangeDescription(e) {
    e.preventDefault()
    this.setState({
      descriptionPost: e.target.value
    }) 
  }
  handlePosition() {
    const longitude = this.props.coords.longitude
    const latitude = this.props.coords.latitude
    this.setState({
      longitude: longitude,
      latitude: latitude
    })
  }
  async handleNewAccidentPost(e) {
    e.preventDefault()
    let iduser = this.state.id
    let title =  this.state.titlePost
    let description = this.state.descriptionPost
    let longitude = this.state.longitude
    let latitude = this.state.latitude
    const newAccident = { description, longitude, latitude, iduser }
    console.log(newAccident)
    await HandleAccidentCreate(newAccident)
  }
  render() {
    const {countLostPet, person, post, petsData} = this.state
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader onLogout={e=>this.signOut(e)} onSignAdmi={e=>this.onSignAdmi(e)} onHandleDetail={e=>this.onHandleDetail(e)}/>
          <Suspense  fallback={this.loading()}>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <main className="main container">
            <br/>
            <div className="animated fadeIn">
              {/* Cardview - contadores */}
              <Row>
                <CardView lg='3' className='text-white bg-warning' text='MASCOTAS PERDIDAS' results={countLostPet === 0 ? '0' : countLostPet}/>
                <CardView lg='3' className='text-white bg-pink'text='MASCOTAS MALTRATADAS' results={countLostPet === 0 ? '0' : countLostPet}/>
                <CardView lg='3' className='text-white' style={{background: `${COLOR_PRIMARY}`}} text='MASCOTAS RAPTADAS' results={countLostPet === 0 ? '0' : countLostPet}/>
                <CardView lg='3' className='text-white bg-success' text='MASCOTAS ADOPTADAS' results={countLostPet === 0 ? '0' : countLostPet}/>
              </Row>
              <hr/>
              <Span className='mt-4' text='Ultimas mascotas adoptadas'/>
              <Box display="flex">
                <ImagePetAdoption footerImage={'../../assets/img/avatars/9.jpg'} bodyImage={'../../assets/img/pets/roky.jpg'}/>
                <ImagePetAdoption footerImage={'../../assets/img/avatars/10.jpg'} bodyImage={'../../assets/img/pets/kira.jpg'}/>
                <ImagePetAdoption footerImage={'../../assets/img/avatars/11.jpg'} bodyImage={'../../assets/img/pets/bella.jpg'}/>
                <ImagePetAdoption footerImage={'../../assets/img/avatars/10.jpg'} bodyImage={'../../assets/img/pets/kira.jpg'}/>
                <ImagePetAdoption footerImage={'../../assets/img/avatars/12.jpg'} bodyImage={'../../assets/img/pets/frijolito.jpg'}/>
                <ImagePetAdoption footerImage={'../../assets/img/avatars/11.jpg'} bodyImage={'../../assets/img/pets/bella.jpg'}/>
                <ImagePetAdoption footerImage={'../../assets/img/avatars/10.jpg'} bodyImage={'../../assets/img/pets/kira.jpg'}/>
                <ImagePetAdoption footerImage={'../../assets/img/avatars/12.jpg'} bodyImage={'../../assets/img/pets/bella.jpg'}/>
                <ImagePetAdoption footerImage={'../../assets/img/avatars/9.jpg'} bodyImage={'../../assets/img/pets/kira.jpg'}/>
              </Box>
              <br/>
              <div className="row mb-3">
                <div className="col-12 col-sm-8 col-lg-8 themed-grid-col">
                  {/* Left */}
                  <form className="post publisher-box">
                    <div className="panel panel-white post panel-shadow">
                      <div className="wo_pub_txtara_combo">
                        <img src={'../../assets/img/avatars/' + person.photo} className="post-avatar responsive" alt='Imagen'/>
                        {/* <Imagenes src={'../../assets/img/avatars/' + person.photo} alt={person.lastName}/> */}
                        <ResponsiveDialog placeholder={'¿Quieres publicar algo, ' + (((person.firstName == null) ? '': person.firstName) + ' ' + ((person.lastName == null) ? '': person.lastName)).toLowerCase() + '?'}
                        UserDialog={(((person.firstName == null) ? '': person.firstName) + ' ' + ((person.lastName == null) ? '': person.lastName)).toLowerCase()}
                        UserDialogImg={'../../assets/img/avatars/'  + person.photo} tituloPost={(person.firstName == null) ? 'Por favor, ingresa el titulo de la publicación': person.firstName + ', ingresa el titulo de la publicación'}
                        handleOnChangeTitulo={this.handleOnChangeTitulo} handleOnChangeDescription={this.handleOnChangeDescription}
                        handleNewPost={e=>this.handleNewAccidentPost(e)}/>
                      </div>
                    </div>
                  </form>
                  <br/>
                  <Greeting name={person.firstName + ' ' + person.lastName}/> {/* Mensaje de saludo al usuario */}
                  {/* Publicaciones */}
                  <div>
                    {
                      post.length > 0 ? <CardViewPost autor={person.firstName + ' ' + person.lastName} textPost={'¡Mascota maltratada, ayuda!'} avatar={'../../assets/img/avatars/9.jpg'}/>
                      : <CardViewPostEsqueleton/>
                    }
                  </div>
                  <div>
                    {
                      post.length > 0 ? <CardViewPost autor={person.firstName + ' ' + person.lastName} textPost={'¡Mascota maltratada, ayuda!'} avatar={'../../assets/img/avatars/9.jpg'}/>
                      : <CardViewPostEsqueleton/>
                    }
                  </div>
                  <div>
                    {
                      post.length > 0 ? <CardViewPost autor={person.firstName + ' ' + person.lastName} textPost={'¡Mascota maltratada, ayuda!'} avatar={'../../assets/img/avatars/9.jpg'}/>
                      : <CardViewPostEsqueleton/>
                    }
                  </div>
                  <div>
                    {
                      post.length > 0 ? <CardViewPost autor={person.firstName + ' ' + person.lastName} textPost={'¡Mascota maltratada, ayuda!'} avatar={'../../assets/img/avatars/9.jpg'}/>
                      : <CardViewPostEsqueleton/>
                    }
                  </div>
                </div>
                <div className="col-12 col-lg-4 themed-grid-col">
                  {/* Right */}
                  <TitlebarGridList headTitle={'Ultimas publicaciones de mascotas perdidas'} petsData={petsData}/>
                </div>
                <div className="">
                  <SpeedDialTooltipOpen/>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
Home.propTypes = { ...Home.propTypes, ...geoPropTypes };

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Home);
