import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row, FormGroup } from 'reactstrap';
import Label from '../../common/Label'
import Span from '../../common/Span'
import Icon from '../../common/Icon'
import Imagenes from '../../common/Imagenes'
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
import { COLOR_SECONDARY } from '../../config/config';
import Progress from '../../common/Progress'
//Redux
import { connect } from 'react-redux';
import { AccidentGetAllUnApproved, ApprovedAccident, RechazeAccident } from './action/accidentAction'

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

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

class Accidents extends Component {
  state = {
    open: false,
    setOpen: false,
    rechaze: false,
    setRechaze: false,
    inMount: false
  }
  async componentDidMount() {
    this.inMount = true // variable para verificar cuando el componente está montado
    if(this.inMount) {
      await this.props.AccidentGetAllUnApproved()
      this.interval = setInterval(() => { // creamos esta setinverval, para que vaya actualizando, solamente cuando el componente a sido montado
        this.props.AccidentGetAllUnApproved()
      }, 1000);
    }
  }
  componentWillUnmount() {
    this.inMount = false
    clearInterval(this.interval) // Cuando desmontamos el componente, limpiamos el ser interval.
  }
  async handleApprovedAccident(id) {
    if (!this.state.open) {
      this.setState({open: true})
      await this.props.ApprovedAccident(id) // Aprobamos el accidente registrado
    }
  }
  functionClose() {
    if (this.state.open) {
      this.setState({open: false})
    }
  }
  functionCloseRechaze() {
    if (this.state.rechaze) {
      this.setState({rechaze: false})
    }
  }
  async handleRechazeAccident(id) {
    if (!this.state.rechaze) {
      this.setState({rechaze: true})
      await this.props.RechazeAccident(id) // Rechazamos el accidente
    }   
  }
  render() {
    const { open, rechaze } = this.state
    const { accidents } = this.props
    return(
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <Icon className='fa fa-align-justify'/>
              <Label text='Gestión de accidentes'/>
            </CardHeader>
            <CardBody>
              <FormGroup row>
                <Col xs="4" md="8">
                  {/* <TextFieldSearch value={this.state.text} onChange={(text) => this.functionPetsFilter(text)}/> */}
                </Col>
              </FormGroup>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead className="thead-light">
                    <tr>
                      <th>N°</th>
                      <th>Mascota</th>
                      <th>Ult. ves visto</th>
                      <th>Autor</th>
                      <th>Tipo de accidente</th>
                      <th>Nivel de accidente</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      accidents.length > 0 ? accidents.map((accidentUnApproved, index) => {
                        return (
                          <tr key={accidentUnApproved.idpetaccident}>
                            <td>{index + 1}</td>
                            <td>
                              <Imagenes src={'../../assets/img/pets/' + accidentUnApproved.photoApprove} alt='Imagen' color={accidentUnApproved.color}/>
                            </td>
                            <td>{accidentUnApproved.lastSeen}</td>
                            <td>{accidentUnApproved.firstName} {accidentUnApproved.lastName}</td>
                            <td>{accidentUnApproved.accidentType}</td>
                            <td>
                              <Span style={{color: `${accidentUnApproved.color}`}} text={accidentUnApproved.dangerLevel}/>
                            </td>
                            <td>
                              <button className='btn btn-success' onClick={() =>this.handleApprovedAccident(accidentUnApproved.idpetaccident)}><i className='fa fa-check'></i></button>
                              <button className='btn btn' style={{backgroundColor: `${COLOR_SECONDARY}`, color: 'white'}} onClick={() =>this.handleRechazeAccident(accidentUnApproved.idpetaccident)}><i className='fa fa-times'></i></button>
                            </td> 
                          </tr>
                        )
                      }): loading()
                    } 
                  </tbody>
                </table>
                <Snackbar
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  autoHideDuration={3000}
                  onClick={e=>this.functionClose(e)}>
                  <MySnackbarContentWrapper
                    variant="success"
                    message="¡Accidente aprobado con éxito!"
                  />
                </Snackbar>
                {/* Mensaje de rechazo */}
                <Snackbar
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={rechaze}
                  autoHideDuration={3000}
                  onClick={e=>this.functionCloseRechaze(e)}>
                  <MySnackbarContentWrapper
                    variant="error"
                    message="¡Accidente rechazado con éxito!"
                  />
                </Snackbar>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
const mapStateToProps = state => ({
  accidents: state.accidents.accidents
})
export default connect(mapStateToProps, { AccidentGetAllUnApproved, ApprovedAccident, RechazeAccident })(Accidents);