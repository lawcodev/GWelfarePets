import React, { useEffect, useState } from 'react'
import { H1, Button, Span, SelectedFilter, DatePicker } from '../../../../../common/'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { PetGetById } from '../../../../Pets/action/petAction'
import { connect } from 'react-redux';
import { AppHeader } from '@coreui/react'
import { withRouter } from "react-router-dom"; // Componente de orden superior
import { Dialog } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Row } from 'reactstrap';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { amber, green } from '@material-ui/core/colors';
import clsx from 'clsx';

const DefaultHeader = React.lazy(() => import('../../../container/DefaultLayout/Header'))

const optionsAportationFrecuency = [
  { value: '0', label: '1 mes' },
  { value: '1', label: '3 meses' },
  { value: '2', label: '6 meses' },
  { value: '3', label: '1 año' },
]
const optionsTypeService = [
  { value: '1', label: 'Normal (comida, baño)' },
  { value: '2', label: 'Vip (Comida, baño, desparacitación)' },
  { value: '3', label: 'Premium (Comida, baño, desparatización y más...)' },
]

const useDetailPet = (props) => {
  const [detailPet, setDetailPet] = useState(false)
  useEffect(() => {
    async function getDetailPet () {
      const idpet = props.match.params.id
      const response = await props.PetGetById(idpet)
      setDetailPet(response.payload)
    }
    getDetailPet()
  },[])
  return { detailPet }
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(4),
  },
  instructions: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

function getSteps() {
  return ['Más información', 'Paga una contribución', 'Finalizar apadrinamiento'];
}

const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return <ResumeDetail/>
    case 1:
      return <Contribution/>
    case 2:
      return <FinallyApadrinamiento/>
    default:
      return 'Unknown stepIndex';
  }
}
const Contribution = () => {
  const [valor, setValor] = useState(false)
  function handleChange (selectedValue) {
    setValor(selectedValue.value)
  }
  return(
    <div>
      <Row>
        <div className='col'>
          <Span text='Total a pagar: '/>
          {
            valor === '1' ?
            <input value='S/. 80.00' disabled />
            : valor === '2' ?
            <input value='S/. 120.00' disabled />
            : valor === '3' ?
            <input value='S/. 160.00' disabled />
            : <input value='S/. 80.00' disabled />
          }
        </div>
      </Row>
      <br/><br/>
      <Row>
        <div className='row col-md-12'>
          <div className='col'>
            <div className='col-md-8'>
              <Span text='Frec. aportación'/>
              <br/>
            </div>
            <SelectedFilter options={optionsAportationFrecuency}/>
            <br/>
          </div>
          <div className='col'>
            <div className='col-md-8'>
              <Span text='Tipo de servicio'/>
              <br/>
            </div>
            <SelectedFilter options={optionsTypeService} handleChange={handleChange}/>
            <br/>
          </div>
        </div>
      </Row>
      <Row>
        <div className='col-md-6'>
          <Span text='Tiempo de apadrinamiento'/>
        </div>
        <div className='row col-md-12'>
          <div className='col'>
            <DatePicker titleDate='Fecha inicio'/>
            <br/>
          </div>
          <div className='col'>
            <DatePicker titleDate='Fecha fin'/>
            <br/>
          </div>
        </div>
      </Row>
    </div>
  )
}
const FinallyApadrinamiento = () => {
  return(
    <Span text='A un paso de finalizar tu solicitud de apadrinamiento'/>
  )
}
const ResumeDetail = () => {
  return(
    <div>
      <Span text='Si deseas ayudar a los animales abandonados, pero por diferentes circunstancias no puedes adoptar a ninguno en este momento, en Geopetfare ofrecemos la solución ideal; por una módica cantidad puedes apadrinar/amadrinar a uno de nuestros animales.'/>
      <br/><br/>
      <Span text='Con este pequeño gesto puedes mejorar la calidad de vida de los animales que han llegado a nuestro refugio víctimas del maltrato y abandono, y que por sufrir determinadas enfermedades o lesiones, tanto físicas como psíquicas, o ser animales de avanzada edad, su adopción es mucho más complicada, y en muchos casos, se ven condenados a permanecer toda su vida en el refugio.'/>
      <br/><br/>
      <Span text='Presiona en el botón siguiente para continuar.'/>
    </div>
  )
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
const Wizard = () => {
  const classes = useStyles()
  const [notificationApadrinamiento, setNotificationApadrinamiento] = useState(false)
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const functionClose = () => {
    if (notificationApadrinamiento) {
      setNotificationApadrinamiento(false)
    }
  }
  const saveSponsorShip = () => {
    if (!notificationApadrinamiento) {
      setNotificationApadrinamiento(true)
    }
  } 
  return(
    <React.Suspense>
      <div className='wuf'>
        <div className='container top'>
          <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>¡Usted a completado todos los pasos!</Typography>
                  <Button text='Guardar solicitud' variant='contained' color='primary' onClick={saveSponsorShip} />
                  <Snackbar
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={notificationApadrinamiento}
                    autoHideDuration={3000}
                    onClick={e=>functionClose(e)}>
                    <MySnackbarContentWrapper
                      variant="success"
                      message="¡Apadrinamiento solicitado con éxito!"
                    />
                  </Snackbar>
                </div>
              ) : (
                <div>
                  <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.backButton}
                      variant='outlined'
                      text='Volver'
                    >
                    </Button>
                    &nbsp;&nbsp;
                    <Button variant="contained" color="primary" onClick={handleNext}
                      text={activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Suspense>
  )
}
const DetailPetViewModel = (props) => {
  const [open, setOpen] = useState(false)
  const { detailPet } = useDetailPet(props)
  const functionClickOpen = () => {
    if (!open) {
      setOpen(true)
    }
  }
  const functionClose = () => {
    if (open) {
      setOpen(false)
    }
  }
  document.title = `Apadrinamiento a | ${detailPet.petName}`;
  return(
    <React.Suspense>
      <AppHeader fixed>
        <DefaultHeader/>
      </AppHeader>
      <br/><br/>
      <div className="wuf">
        <div className="container top">
          <div className="black-left">
            <div className="block-right">
              <br/>
              <H1 text={detailPet.petName}/>
              <table>
                <tbody> 
                  <tr>
                    <th>Sexo</th>
                    <td>{detailPet.genre}</td>
                  </tr>
                  <tr>
                    <th>Edad aprox.</th>
                    <td>
                      {detailPet.years > 1 ? detailPet.years + ' año(s) y ': detailPet.years + ' año y '}
                      {detailPet.mounths > 1 ? detailPet.mounths + ' mes(es)': detailPet.mounths + ' mes'}
                    </td>
                  </tr>
                  <tr>
                    <th>Tamaño</th>
                    <td>{detailPet.size}</td>
                  </tr>
                  <tr>
                    <th>Peso aprox.</th>
                    <td>{detailPet.weight + 'kg'}</td>
                  </tr>
                  <tr>
                    <th>Tipo de pelo</th>
                    <td>{detailPet.hairType}</td>
                  </tr>
                  <tr>
                    <th>Nivel de actividad</th>
                    <td>{detailPet.activityLevel}</td>
                  </tr>
                  <tr>
                    <th>Espacio abierto requerido</th>
                    <td>{detailPet.aPreferences}</td>
                  </tr>
                  <tr>
                    <th>Puede estar solo</th>
                    <td>{detailPet.careState}</td>
                  </tr>
                </tbody>
              </table>
              <br/><br/>
              <div className="row col-md-12">
                <div className="col">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button onClick={() => functionClickOpen()} text='Iniciar proceso de apadrinamiento' color='primary' variant='contained'/>
                </div>
              </div>
            </div>
            <br/>
            <br/>
            <div className="row">
              <img className="img" src={'../../assets/img/pets/' + detailPet.photo} width="400px" height="380px" alt='imagen'/>
            </div>
          </div>
         
        </div>
      </div>
      <Dialog open={open} onClose={() => functionClose()}>
        <DialogTitle id="alert-dialog-title">{detailPet.petName} |  {detailPet.years > 1 ? detailPet.years + ' año(s) y ': detailPet.years + ' año y '}
        {detailPet.mounths > 1 ? detailPet.mounths + ' mes(es)': detailPet.mounths + ' mes'} </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Wizard/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Suspense>
  )
}
export default withRouter(connect(null, { PetGetById })( DetailPetViewModel ))