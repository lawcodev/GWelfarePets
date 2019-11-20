import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { PetsGetAll } from '../../../../Pets/action/petAction'
import { ProgressCircle, Button, H2 } from '../../../../../common'
import { Col, Row, Card, CardImg, CardBody } from 'reactstrap';
import { COLOR_PRIMARY, COLOR_SUCCESS, COLOR_WHITE } from '../../../../../config/config'
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom"; // Componente de orden superior

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const usePets = (props) => {
  const [petSponsorShip, setPetSponsorShip] = useState(false)
  useEffect(() => {
    async function getAllPets () {
      const response = await props.PetsGetAll()
      setPetSponsorShip(response.payload)
    }
    getAllPets()
  })
  return { petSponsorShip } 
}

const PetStore = (props) => {
  const { petSponsorShip } = usePets(props)
  const classes = useStyles();
  /* Funciones */
  function onHandleDetail(id) {
    props.history.push('/apadrinar/' + id)
  }
  return(
    <div className="adop container-fluid">
      <Row>
        {
          petSponsorShip.length > 0 ? petSponsorShip.map((pet) => {
            const colorPet = pet.color === 'badge badge-success' ? COLOR_SUCCESS: COLOR_PRIMARY
            return(
              <React.Fragment key={pet.idpet}>
                <Col xs="12" sm="4" md="3">
                  <Card>
                    <CardImg top width="100%" height='300px' src={'../../assets/img/pets/' + pet.photo} alt={pet.petName.toUpperCase()} />
                    <CardBody>
                      <div className="form-group">
                        <H2 text={pet.petName.toUpperCase()} style={{color: COLOR_PRIMARY}}/>
                      </div>
                      <div className="form-group">
                        <span className='text-muted'>
                          {pet.genre + ' | '} 
                          {pet.years > 1 ? pet.years + ' año(s) y ': pet.years + ' año y'}
                          {pet.mounths > 1 ? pet.mounths + ' mes(es)': pet.mounths + ' mes'}
                        </span>
                      </div>
                      <div className="form-group">
                        <span className='text-muted'><span className={pet.color}>{pet.statusPet}</span></span>
                      </div>
                      <div className="actions pull-right save-post pointer">
                        <div className='col'>
                          {
                            pet.statusPet === 'Adoptado' ? <Button text={<span>{pet.statusPet}<span className="verified-color">&nbsp;<svg viewBox="0 0 16 16" class="svg-icon" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-97.103 -44.137)"><path d="M113.1,52.137a8,8,0,1,0-8,8,8,8,0,0,0,8-8" fill={colorPet}></path><path d="M155.4,88.276l1.7,3.434,3.63.566-2.578,2.673.8,3.549L155.4,96.951,151.847,98.5l.8-3.549-2.578-2.673,3.63-.566Z" transform="translate(-50.299 -41.917)" fill={COLOR_WHITE}></path></g></svg></span></span>} titleTooltip={(pet.petName).toUpperCase() + ', ya está ' + (pet.statusPet).toLowerCase() + '🤩'} color='primary' variant='outlined' disabled className={classes.button} style={{marginRight: '-15px'}}/>
                            : pet.statusPet === 'Apadrinado' ? <Button text={<span>{pet.statusPet}<span className="verified-color">&nbsp;<svg viewBox="0 0 16 16" class="svg-icon" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-97.103 -44.137)"><path d="M113.1,52.137a8,8,0,1,0-8,8,8,8,0,0,0,8-8" fill={colorPet}></path><path d="M155.4,88.276l1.7,3.434,3.63.566-2.578,2.673.8,3.549L155.4,96.951,151.847,98.5l.8-3.549-2.578-2.673,3.63-.566Z" transform="translate(-50.299 -41.917)" fill={COLOR_WHITE}></path></g></svg></span></span>} titleTooltip={(pet.petName).toUpperCase() + ', ya está ' + (pet.statusPet).toLowerCase() + '🤩'} color='primary' variant='outlined' disabled className={classes.button} style={{marginRight: '-15px'}}/>
                            : <Button text='Apadrinar' color='primary' variant='outlined' titleTooltip={'Apadrina ahora a ' + (pet.petName).toUpperCase() + '😊'} onClick={()=>onHandleDetail(pet.idpet)} style={{marginRight: '-15px'}}/>
                          }
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </React.Fragment>
            )
          }): <ProgressCircle/>
        }
      </Row>
    </div>
  )
}
const mapStateToProps = state => ({
  pets: state.pets.pets
})
export default withRouter(connect(mapStateToProps, { PetsGetAll })(PetStore))