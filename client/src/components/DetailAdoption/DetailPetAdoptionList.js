import React, { useState, useEffect } from 'react'
import { Dialog } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { COLOR_PRIMARY, COLOR_SUCCESS, COLOR_SECONDARY } from '../../config/config'
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PaymentIcon from '@material-ui/icons/Payment';
import PetsIcon from '@material-ui/icons/Pets';
import Span from '../../common/Span'
import H1 from '../../common/H1'
import H2 from '../../common/H2'
import Tabs from '../../common/Tabs'
import Button from '../../common/Buttons'
import { withRouter } from "react-router-dom"; // Componente de orden superior, lo usamos para poder usar el this.props.history.push
import SwitchApple from '../../common/SwitchApple'
import AuthService from '../../config/token';
import { connect } from 'react-redux';
import { AddNewAdoption } from './action/adoptionAction'
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { amber, green } from '@material-ui/core/colors';

const useUserGetProfile = () => {
  const [user, setUser] = useState()
  const [isAuth, setIsAuth] = useState(false)
  const Auth = new AuthService();
  useEffect(() => {
    function fetchUserProfile() {
      const profile = Auth.getProfile() // obtenemos la sesión
      setIsAuth(true)
      setUser(profile)
    }
    fetchUserProfile()
  },[])
  return { user, isAuth }
}

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

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};
const DetailPetAdoptionList = (props) => {
  const [open, setOpen] = useState(false)
  const [notification, setNotification] = useState(false)
  const [contribution, setContribution] = useState()
  const { user } = useUserGetProfile(props)

  let pet = props.pet.petName
  document.title = `${'Adótapme | Me llamo: ' + pet}`

  const functionClickOpen = (id) => {
    if (!open) {
      setOpen(true)
    }
  }
  const functionClose = () => {
    if (open) {
      setOpen(false)
    }
  }
  const startAdoption = (e) => {
    e.preventDefault()
    props.history.push('/home')
  }
  const handleSaveAdoption = async (e) => {
    e.preventDefault()
    const contributionAdoption = contribution
    const idpet = props.pet.idpet
    const iduser = user.id
    const newAdoption = { iduser, idpet, contributionAdoption } 
    const addNewAdoption = await props.AddNewAdoption(newAdoption)
    if(addNewAdoption) {
      setNotification(true)
    } else {
      setNotification(false)
    }
  }
  // Switch
  function onChangeContribution(e) {
    e.preventDefault()
    const contribution = e.target.value
    setContribution(contribution)
  }
  return(
    <React.Suspense fallback={'Cargando...'}>
      <div className="wuf">
        <div className="container top">
          <div className="black-left">
            <div className="block-right">
              <H1 text={props.pet.petName}/>
              <table>
                <tbody> 
                  <tr>
                    <th>Sexo</th>
                    <td>{props.pet.genre}</td>
                  </tr>
                  <tr>
                    <th>Edad apxo.</th>
                    <td>
                      {props.pet.years > 1 ? props.pet.years + ' año(s) y ': props.pet.years + ' año y '}
                      {props.pet.mounths > 1 ? props.pet.mounths + ' mes(es)': props.pet.mounths + ' mes'}
                    </td>
                  </tr>
                  <tr>
                    <th>Tamaño</th>
                    <td>{props.pet.size}</td>
                  </tr>
                  <tr>
                    <th>Peso aprox.</th>
                    <td>{props.pet.weight + 'kg'}</td>
                  </tr>
                  <tr>
                    <th>Tipo de pelo</th>
                    <td>{props.pet.hairType}</td>
                  </tr>
                  <tr>
                    <th>Nivel de actividad</th>
                    <td>{props.pet.activityLevel}</td>
                  </tr>
                  <tr>
                    <th>Espacio abierto requerido</th>
                    <td>{props.pet.aPreferences}</td>
                  </tr>
                  <tr>
                    <th>Puede estar solo</th>
                    <td>{props.pet.careState}</td>
                  </tr>
                </tbody>
              </table>
              <br/>
              <div className="aboutdog mobile-only">
                <table>
                  <tbody>
                    <tr>
                      <td><p>&iquest;Viste mis fotos? Me encantan porque han captado mi esencia, &iexcl;en todas sonr&iacute;o!. Soy una mascota muy feliz, me llevo s&uacute;per bien con los demás del albergue, sin embargo ya es hora de cambiar tu vida humano, yo derrocho amor y te va a gustar.  Si me adoptas, llego a casa ba&ntilde;ado y equipado con 1 pack de galletas Cookie Dogster, 1 cama Dentitoy, 1 collar WUF, carnaza y mucho amor. &iexcl;Ya estoy listo para irme contigo!.</p></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="aboutdog">
                <Tabs/>
              </div>
            </div>
            <br/>
            <div className="row">
              <img className="img" src={'../../assets/img/pets/' + props.pet.photo} width="400px" height="380px" alt='imagen'/>
            </div>
          </div>
          <br/><br/>
          <div className="row col-md-6">
            <div className="col">
            &nbsp;&nbsp;&nbsp;<Button onClick={() => functionClickOpen()} text='INSCRIBIRME EN LA LISTA DE ESPERA' color='primary' variant='contained'/>
            </div>
          </div>
          <a onClick={() => this.handleDetailPet('/adopta', props.pet.idpet)} className='side-arrow right'></a>
        </div>
      </div>
      <Dialog open={open} onClose={() => functionClose()}>
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <H1 text='¡Quiero adoptarlo!' className='text-center' style={{color: COLOR_PRIMARY}}/>
            <br/>
            <div className="row">
              <div className="col">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AssignmentIcon fontSize='large'/>
                <br/>
                <Span text='1.- Postula'/>
              </div>
              <div className="col">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<PersonPinIcon fontSize='large'/>
                <br/>
                <Span text='2.- Entrevista personal'/>
              </div>
              <div className="col">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<PaymentIcon fontSize='large'/>
                <br/>
                <Span text='3.- Pago de contribución (Opcional)'/>
              </div>
              <div className='col blockm'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<PetsIcon fontSize='large'/>
                <br/>
                <Span text='4.- Recoge tu mascota ideal'/>
              </div>
            </div>
            <br/>
            <div className='col'>
              <H2 className='text-center' text='¿Quieres iniciar el proceso de adopción?'/>
            </div>
            <br/>
            {/* Switch para habilitar la contribución */}
            <div className='col'>
              {
                props.isAuth ? 
                <div>
                  <SwitchApple title='¿Dejas una contribución S/.?' onChangeContribution={onChangeContribution}/>
                </div> : ''
              }
            </div>
            <div className='row container text-center'>
              <div className="col">
                {
                  props.isAuth ? 
                  <div>
                    <Button text='Si, ya tengo autorización' onClick={(e) => handleSaveAdoption(e)} style={{background: COLOR_SUCCESS, color: 'white'}}/>
                  </div> :
                  <div>
                    <Button text='Si quiero' onClick={(e) =>startAdoption(e)} style={{background: COLOR_SUCCESS, color: 'white'}}/>
                  </div>
                }
              </div>
              <div className="col">
                <Button text='Por ahora no' onClick={() =>functionClose()} style={{background: COLOR_SECONDARY, color: 'white'}}/>
              </div>
            </div> 
            {/* Notificacion de success */}
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={notification}
              autoHideDuration={3000}
              onClick={e=>functionClose(e)}>
              <MySnackbarContentWrapper
                variant="success"
                message="Adopción solicitada con éxito!"
              />
            </Snackbar>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Suspense>
  )
}

export default withRouter(connect(null, { AddNewAdoption })(DetailPetAdoptionList))