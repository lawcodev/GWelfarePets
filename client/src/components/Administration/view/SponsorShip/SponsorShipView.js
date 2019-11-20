import React from 'react'
import { Card, CardBody, CardHeader, Col, Row, FormGroup } from 'reactstrap';
import { Label, Imagenes } from '../../../../common/'
import { COLOR_SECONDARY, COLOR_SUCCESS } from '../../../../config/config'

const SponsorShipView = (props) => {
  return(
    <Row>
      <Col>
        <Card>
          <CardHeader>
            <i className='fa fa-align-justify'/>
            <Label text='Gestión de apadrinamiento'/>
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
                    <th>Nombre Mascota</th>
                    <th>Apadrinador</th>
                    <th>Nombre del apadrinador</th>
                    <th>Contribución</th>
                    <th>Tiempo</th>
                    <th>Tipo de servicio</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><Imagenes src={'../../assets/img/pets/kira.jpg'} alt='Imagen' color={COLOR_SECONDARY}/></td>
                    <td>Kira</td>
                    <td><Imagenes src={'../../assets/img/avatars/12.jpg'} alt='Imagen' color={COLOR_SUCCESS}/></td>
                    <td>Christian Perez Salazar</td>
                    <td>S/.120.00 </td>
                    <td>3 meses</td>
                    <td>Vip</td>
                    <td>
                      <button className='btn btn-success'><i className='fa fa-check'></i></button>
                      <button className='btn btn' style={{backgroundColor: `${COLOR_SECONDARY}`, color: 'white'}}><i className='fa fa-times'></i></button>
                    </td>
                  </tr>
                  {/* {
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
                              unApproved.state.data == 0 ? 'En proceso | Entrevista' : ''
                            }
                          </td>
                          <td>
                            <button className='btn btn-success' onClick={() =>this.handleApprovedAdoption(unApproved.idadoption)}><i className='fa fa-check'></i></button>
                            <button className='btn btn' style={{backgroundColor: `${COLOR_SECONDARY}`, color: 'white'}} onClick={() =>this.handleRechazeAccident(unApproved.idadoption)}><i className='fa fa-times'></i></button>
                          </td> 
                        </tr>
                      )
                    }): loading() */}
                  
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
export default SponsorShipView