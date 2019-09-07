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

class CountRescuedPets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countRescuedPet:''
    }
  }
  async componentDidMount() {
    const responseCountRescuedPet = await handleCountLostPet() // Cambiar el contador para las mascotas rescatadas
    this.setState({ countRescuedPet: responseCountRescuedPet.data.count, isFetch: false})
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render() {
    const {countRescuedPet} = this.state
    return(
      <Col xs="12" sm="8" lg="3">
        <Card className="text-white bg-success">
          <CardBody className="pb-0">
            <ButtonGroup className="float-right">
              <Icon className='icon-settings'/>
            </ButtonGroup>
            <H2 text={countRescuedPet === 0 || countRescuedPet === '' ? 'Cantidad: ' + 0 : 'Mascotas:' + countRescuedPet}/>
            <Label text='Mascotas apadrinadas'/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
export default CountRescuedPets