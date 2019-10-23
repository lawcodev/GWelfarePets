import React, { Component } from 'react'
import Map from './utils/Map'
import { AccidentGetAllApproved } from '../Accidents/action/accidentAction'
import { Row } from 'reactstrap';
import { connect } from 'react-redux';

class MappingPetAdmi extends Component {
  state = {
    inMount: false
  }
  async componentDidMount() {
    this.inMount =  true
    if(this.inMount) {
      await this.props.AccidentGetAllApproved()
      this.interval = setInterval(() => {
        this.props.AccidentGetAllApproved()
      }, 1000);
    }
  }
  componentWillUnmount() {
    this.inMount = false
    clearInterval(this.interval)
  }
  render() {
    const { accidents } = this.props
    return(
      <div className="animated fadeIn">
        <Row>
          <Map accidents={accidents} center={{ lat: -8.1278394000, lng: -79.0265921000 }} />
        </Row>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  accidents: state.accidents.accidents
})
export default connect(mapStateToProps, { AccidentGetAllApproved })(MappingPetAdmi);