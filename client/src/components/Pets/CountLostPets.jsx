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

class CountLostPets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countLostPet:''
    }
  }
  async componentDidMount() {
    const responseCountLostPet = await handleCountLostPet()
    this.setState({ countLostPet: responseCountLostPet.data.count, isFetch: false})
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render() {
    const {countLostPet} = this.state
    return(
      <Col xs="12" sm="8" lg="3">
        <Card className="text-white bg-warning">
          <CardBody className="pb-0">
            <ButtonGroup className="float-right">
              <Icon className='icon-settings'/>
            </ButtonGroup>
            <H2 text={countLostPet === 0 || countLostPet === '' ? 'Cantidad: ' + 0 : 'Mascotas:' + countLostPet}/>
            <Label text='Mascotas perdidas'/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
export default CountLostPets