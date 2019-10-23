import React, { Component, Suspense } from 'react';
import { AppHeader } from '@coreui/react';
import { HandleAuthenticationById } from '../../components/Login/services/authHelper.services'
import { COLOR_SECONDARY, HOME } from '../../config/config'
import { geolocated, geoPropTypes } from '../../config/userPosition'
import { makeStyles } from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';
import CardView from '../../common/CardView'
import Span from '../../common/Span'
import AuthService from '../../config/token';
import Box from '@material-ui/core/Box';
import ImagePetAdoption from '../../common/ImagePetAdoption'
import SpeedDialTooltipOpen from '../../common/SpeedDialTooltipOpen'
import { Input, Row } from 'reactstrap';
import Snackbar from '@material-ui/core/Snackbar';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import AccidentsPost from '../Accidents/AccidentsPost'
import { HandleAccidentCreate } from './services/accidents.services'
import Greeting from './Greeting'
import { Dialog } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Selected from '../../common/Selected'
import SelectDangerLevel from '../../common/SelectDangerLevel'
import Progress from '../../common/Progress'
import Button from '@material-ui/core/Button';
import MultipleImageUpload from '../../common/MultipleImageUpload'
import GetPetsLost from '../Pets/GetPetsLost';

const DefaultHeader = React.lazy(() => import('../../containers/DefaultLayout/DefaultHeader'));
const loading = () => <div className="animated fadeIn pt-1 text-center"><Progress/></div>

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));


function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countLostPet:'',
      person: Object,
      id: 0,
      greeting: '',
      quote: '',
      accidentsApproved: [],
      petsData:[],
      titlePost: '',
      descriptionPost: '',
      lastSeen: '',
      latitude:'',
      longitude:'',
      formatLatitude: '',
      formatLongitude: '',
      open: false,
      openNewPost: false,
      iddangerlevel: 0,
      idaccidenttype: 0,
      openNewPublicationNotification: false,
      // Reporte de abusos states
      stateSelectTypeAccidentLostPet: false,
      stateSelectTypeAccidentAbuse: false,
      files: []

    };
    this.Auth = new AuthService();
    this.handleOnChangeTitulo = this.handleOnChangeTitulo.bind(this)
    this.handleOnChangeLastSeen = this.handleOnChangeLastSeen.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeDanger = this.handleChangeDanger.bind(this)
    this.handleChangeImage = this.handleChangeImage.bind(this)
  }
  async componentDidMount() {
    if(!this.Auth.loggedIn())
      this.props.history.replace('/login');
    const profile = this.Auth.getProfile() // obtenemos la sesión
    const user = await HandleAuthenticationById(profile.id)
    this.setState({
      id: profile.id,
      person: user,
    })
    this.replaceTitle()
    this.handlePosition()
  }
  replaceTitle() {
    document.title = `${HOME}`
  }  
  async signOut(e) {
    e.preventDefault()
    this.Auth.removeAuthorization()
    this.Auth.logout()
    this.functionRedirect('/')
  }
  onSignAdmi(e) {
    e.preventDefault()
    this.functionRedirect('/dashboard')
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
  handleOnChangeLastSeen(e) {
    e.preventDefault()
    this.setState({
      lastSeen: e.target.value
    }) 
  }
  handleChange(selectedValue) {
    const idaccidenttype = selectedValue.value
    if(idaccidenttype == 1) {
      this.setState({
        idaccidenttype: idaccidenttype,
        stateSelectTypeAccidentLostPet: true
      })
    } else {
      this.setState({
        idaccidenttype: idaccidenttype,
        stateSelectTypeAccidentLostPet: false
      })
    }
    if(idaccidenttype == 2) {
      this.setState({
        idaccidenttype: idaccidenttype,
        stateSelectTypeAccidentAbuse: true
      })
    } else {
      this.setState({
        idaccidenttype: idaccidenttype,
        stateSelectTypeAccidentAbuse: false
      })
    }
    this.setState({
      idaccidenttype: idaccidenttype
    })
  }
  handleChangeDanger(selectedValue) {
    const iddangerlevel = selectedValue.value
    this.setState({
      iddangerlevel: iddangerlevel
    })
  }
  handlePosition() {
    if(this.props.coords) {
      this.setState({
        longitude: this.props.coords.longitude,
        latitude: this.props.coords.latitude
      }) 
    } else {
      return
    }
  }
  handleChangeImage(files){
    this.setState({
      files: files
    });
  }
  async handleNewAccidentPost(e) {
    e.preventDefault()

    let iduser = this.state.id
    let lastSeen = this.state.lastSeen
    let title = this.state.titlePost
    let longitude = this.state.longitude
    let latitude = this.state.latitude
    let iddangerlevel = this.state.iddangerlevel
    let idaccidenttype = this.state.idaccidenttype
    const newAccident = { lastSeen, title, longitude, latitude, iddangerlevel, idaccidenttype, iduser }
    
    if(!lastSeen && !title){
      return alert('¡Ingrese los campos necesarios!')
    }
    else {
      const insert = await HandleAccidentCreate(newAccident)
      if(insert) {
        this.setState({
          openNewPost: false,
          openNewPublicationNotification: true // cambiamos el estado a true para que aparezca la notificación
        })
      }
      console.log(newAccident);
    }
  }
  NewPublicationNotificationClose(e) {
    e.preventDefault()
    this.setState({
      openNewPublicationNotification: false
    })
  }
  popperNewPost() {
    if (!this.state.openNewPost) {
      this.setState({openNewPost: true})
    }
  }
  popperNewPostClose() {
    if (this.state.openNewPost) {
      this.setState({openNewPost: false})
    }
  }
  functionClose() {
    if (this.state.open) {
      this.setState({open: false})
    }
  }
  redirectAcctions(e) {
    e.preventDefault()
    this.functionRedirect('/mapeo')   
  }
  onHome(e) {
    e.preventDefault()
    this.functionRedirect('/home')
  }
  
  render() {
    const { countLostPet, person, openNewPost, stateSelectTypeAccidentAbuse, stateSelectTypeAccidentLostPet, openNewPublicationNotification } = this.state
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader onHome={e=>this.onHome(e)} onLogout={e=>this.signOut(e)} onSignAdmi={e=>this.onSignAdmi(e)} onHandleDetail={e=>this.onHandleDetail(e)}/>
          <Suspense  fallback={loading()}>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <main className="main container">
            <br/>
            <div className="animated fadeIn">
              <Row>
                <CardView lg='3' className='text-white bg-warning' text='MASCOTAS PERDIDAS' results={countLostPet === 0 ? '0' : 1}/>
                <CardView lg='3' className='text-white bg-pink' style={{background: `${COLOR_SECONDARY}`}}text='MASCOTAS MALTRATADAS' results={countLostPet === 0 ? '0' : 1}/>
                <CardView lg='3' className='text-white bg-success' text='MASCOTAS ADOPTADAS' results={countLostPet === 0 ? '0' : 7}/>
              </Row>
              <hr/>
              {/* Mascotas adoptadas */}
              <Span className='mt-4' text='Ultimas mascotas adoptadas'/>
              <Box display="flex">
                <ImagePetAdoption footerImage={'../../assets/img/avatars/9.jpg'} bodyImage={'../../assets/img/pets/roky.jpg'}/>
                <ImagePetAdoption footerImage={'../../assets/img/avatars/6.jpg'} bodyImage={'../../assets/img/pets/bella.jpg'}/>
                <ImagePetAdoption footerImage={'../../assets/img/avatars/7.jpg'} bodyImage={'../../assets/img/pets/roky.jpg'}/>
                <ImagePetAdoption footerImage={'../../assets/img/avatars/8.jpg'} bodyImage={'../../assets/img/pets/frijolito.jpg'}/>
                <ImagePetAdoption footerImage={'../../assets/img/avatars/10.jpg'} bodyImage={'../../assets/img/pets/roky.jpg'}/>
                <ImagePetAdoption footerImage={'../../assets/img/avatars/6.jpg'} bodyImage={'../../assets/img/pets/bella.jpg'}/>
                <ImagePetAdoption footerImage={'../../assets/img/avatars/8.jpg'} bodyImage={'../../assets/img/pets/frijolito.jpg'}/>
              </Box>
              <br/>
              <div className="row mb-3">
                <div className="col-12 col-sm-8 col-lg-8 themed-grid-col">
                  {/* Left - desde la línea 290 hasta 353 está para optimizar ¡¡¡ Urgente !!!*/} 
                  <form className="post publisher-box">
                    <div className="panel panel-white post panel-shadow border">
                      <div className="wo_pub_txtara_combo">
                        <img src={'../../assets/img/avatars/' + person.photo} className="post-avatar responsive" alt='Imagen'/>
                        <textarea onClick={()=>this.popperNewPost()} name='name' className="form-control postText ui-autocomplete-input" cols="8" 
                        placeholder={'¿Quieres publicar algo, ' + ' ' + (person.firstName + ' ' + person.lastName) + '?'} dir="auto"/>
                      </div>
                    </div>
                  </form>
                  <Dialog open={openNewPost} onClose={() => this.popperNewPostClose()}>
                    <DialogTitle id="responsive-dialog-title" style={{width: '530px'}}>
                    <div className="col-14 col-sm-6 col-lg-8 themed-grid-col row mb-4 container">
                      <form className="post publisher-box">
                        <div className="panel panel-white post panel-shadow">
                          <div className="wo_pub_txtara_combo">
                            <img src={'../../assets/img/avatars/' + person.photo} className="post-avatar" alt={person.lastName}/>
                            <textarea className="form-control postText ui-autocomplete-input" name='title'
                            placeholder={person.firstName  + ', ingresa el titulo de la publicación'}
                            onChange={this.handleOnChangeTitulo}  dir="auto" style={{width: '480px'}}/>
                          </div>
                        </div>
                      </form>
                    </div>
                    </DialogTitle>
                    <DialogContent>
                      <div className='row'>
                        <div className='col'>
                          <Selected handleChange={this.handleChange}/>
                        </div>
                        <div className='col'>
                          <SelectDangerLevel titleSelect='Niv. peligro: ' handleChangeDanger={this.handleChangeDanger}/>
                        </div>
                      </div>
                      <br/>
                      <small>Usa un título adecuado. No uses títulos vagos. Tu cuenta será bloqueda si no cumples esto.</small>
                      <DialogContentText>
                        {
                          stateSelectTypeAccidentLostPet 
                          ?  <Input type="textarea" placeholder = { person.firstName + ', dónde fue la última vez que viste a tu mascota? Describenos...' } onChange={this.handleOnChangeLastSeen} rows={3} />
                          : ''
                        }
                        {
                          stateSelectTypeAccidentAbuse ? <Input type="textarea" placeholder = { person.firstName + ', ingresa los detalles específicos del maltrato - abuso, las mascotas también tienen sus derechos.' } onChange={this.handleOnChangeLastSeen} rows={3} />
                          : ''
                        }
                        {
                          stateSelectTypeAccidentAbuse || stateSelectTypeAccidentLostPet ? ''
                          : <Input type="textarea" placeholder = { person.firstName + ', ingresa una descripcion clara que describa el incidente' } onChange={this.handleOnChangeLastSeen} rows={3} />
                        }
                      </DialogContentText>
                      <MultipleImageUpload handleChangeImage={this.handleChangeImage}/> {/* Componente multiple - imagen */}
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={()=>this.popperNewPostClose()} color="primary" variant='outlined'>
                        Cerrar
                      </Button>
                      <Button onClick={e=>this.handleNewAccidentPost(e)} color="primary" variant='contained' autoFocus>
                        Publicar
                      </Button>
                    </DialogActions>
                  </Dialog>
                  {/* Notificacion de publicación aceptada */}
                  <Snackbar
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    open={openNewPublicationNotification}
                    autoHideDuration={5000}
                    onClick={e=>this.NewPublicationNotificationClose(e)}>
                    <MySnackbarContentWrapper
                      variant="success"
                      message="¡Proceso de nuevo accidente satisfactorio!"
                    />
                  </Snackbar>
                  <br/>
                  {/* Mensaje de Saludo */}
                  <Greeting name={(person.firstName==null ? '': person.firstName) + ' ' + (person.lastName==null ? '': person.lastName)}/>
                  {/* Publicaciones de accidentes */}
                  <AccidentsPost/>
                </div>
                <div className="col-12 col-lg-4 themed-grid-col">
                  {/* Right - Lista de mascotas perdidas */}
                  <GetPetsLost/>
                </div>
                <div>
                  <SpeedDialTooltipOpen onClick={e=>this.redirectAcctions(e)}/> {/* Opción lado derecho */}
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
export default geolocated({ positionOptions: { enableHighAccuracy: false, },userDecisionTimeout: 5000,})(Home);