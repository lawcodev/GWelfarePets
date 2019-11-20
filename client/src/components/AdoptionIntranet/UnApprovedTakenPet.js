import React from 'react'
import { Card, CardBody, CardHeader, Col, Row, FormGroup } from 'reactstrap';
import Label from '../../common/Label'
import Icon from '../../common/Icon'
import Imagenes from '../../common/Imagenes'
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
import { COLOR_SECONDARY, COLOR_SUCCESS } from '../../config/config';
import Progress from '../../common/Progress'
import { GetAllPetsUnApprovedTaken } from '../DetailAdoption/action/adoptionAction'
//Redux
import { connect } from 'react-redux';

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

const UnApprovedTakenPet = (props) => {
  return(
    <Row>
      <Col>
        <Card>
          <CardHeader>
            <Icon className='fa fa-align-justify'/>
            <Label text='Gestión de adopciones de mascota'/>
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
                    <th>Foto Mascota</th>
                    <th>Nombre Mascota</th>
                    <th>Foto deL solicitante</th>
                    <th>Nombre del solicitante</th>
                    <th>Contribución</th>
                    <th>Estado</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    props.adoptionsTaken.length > 0 ? props.adoptionsTaken.map((unApproved, index) => {
                      return (
                        <tr key={unApproved.idadoption}>
                          <td>{index + 1}</td>
                          <td>
                            <Imagenes src={'../../assets/img/pets/' + unApproved.petPhoto} alt='Imagen' color={COLOR_SECONDARY}/>
                          </td>
                          <td>
                            {unApproved.name}
                          </td>
                          <td>
                            <Imagenes src={'../../assets/img/avatars/' + unApproved.userPhoto} alt='Imagen' color={COLOR_SUCCESS}/>
                          </td>
                          <td>
                            {unApproved.firstname} {unApproved.lastName}
                          </td>
                          <td>
                            S/.{unApproved.contribution}.00
                          </td>
                          <td>
                            {
                              unApproved.state.data === 0 ? 'En proceso | Entrevista' : ''
                            }
                          </td>
                          <td>
                            <button className='btn btn-success' onClick={() =>this.handleApprovedAdoption(unApproved.idadoption)}><i className='fa fa-check'></i></button>
                            <button className='btn btn' style={{backgroundColor: `${COLOR_SECONDARY}`, color: 'white'}} onClick={() =>this.handleRechazeAccident(unApproved.idadoption)}><i className='fa fa-times'></i></button>
                          </td> 
                        </tr>
                      )
                    }): loading()
                  } 
                </tbody>
              </table>
              {/* <Snackbar
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
              </Snackbar> */}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
const mapStateToProps = state => ({
  adoptionsTaken: state.adoptions.adoptions
})
export default connect(mapStateToProps, { GetAllPetsUnApprovedTaken })(UnApprovedTakenPet);