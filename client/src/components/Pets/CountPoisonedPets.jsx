import { handleCountLostPet } from './services/ServicesPets'
import React, {Component} from 'react'
import H2 from '../../common/H2'
import Label from '../../common/Label'
import Icon from '../../common/Icon'
import {
  ButtonGroup,
  Card,
  CardBody,
  Col,
} from 'reactstrap';

class CountPoisonedPets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countPoisonedPet:''
    }
  }
  async componentDidMount() {
    const responseCountPoisonedPet = await handleCountLostPet()
    this.setState({ countPoisonedPet: responseCountPoisonedPet.data.count, isFetch: false})
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render() {
    const {countPoisonedPet} = this.state
    return(
      <Col xs="12" sm="8" lg="3">
        <Card className="text-white bg-danger">
          <CardBody className="pb-0">
            <ButtonGroup className="float-right">
              <Icon className='icon-settings'/>
            </ButtonGroup>
            <H2 text={countPoisonedPet === 0 || countPoisonedPet === '' ? 'Cantidad: ' + 0 : 'Mascotas:' + countPoisonedPet}/>
            <Label text='Mascotas envenedadas'/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
export default CountPoisonedPets