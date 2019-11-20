import React, { Component } from 'react';
import { AppHeader } from '@coreui/react';
import { Row } from 'reactstrap';
import { AccidentGetAllApproved } from '../Accidents/action/accidentAction'
import { connect } from 'react-redux';
import Progress from '../../common/Progress'
import Map from '../MappingPetAdmi/utils/Map'
import httpService from '../../config/token'
import ProgressCircle from '../../common/ProgressCircle'

const DefaultHeader = React.lazy(() => import('../../containers/DefaultLayout/DefaultHeader'));
const loading = () => <div className="animated fadeIn pt-1 text-center"><Progress/></div>

class MappingPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accidentsList: []
    };
    this.Auth = new httpService()
  }
  async componentDidMount() {
    const accidents = await this.props.AccidentGetAllApproved()
    this.setState({
      accidentsList: accidents.payload
    })
    document.title = 'Mapeo de mascotas'
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }
  async signOut(e) {
    e.preventDefault()
    this.Auth.logout()
    this.props.history.push('/')
  }
  onSignAdmi(e) {
    e.preventDefault()
    this.props.history.push('/dashboard')
  }
  onHome(e) {
    e.preventDefault()
    this.props.history.push('/home')
  }
  render() {
    const { accidentsList } = this.state
    return (
      <React.Suspense fallback={loading()}>
        <div className="app">
          <AppHeader fixed>
            <DefaultHeader onHome={e=>this.onHome(e)} onLogout={e=>this.signOut(e)} onSignAdmi={e=>this.onSignAdmi(e)} onHandleDetail={e=>this.onHandleDetail(e)}/>
          </AppHeader>
          <div className="app-body">
            <main className="main container">
              <br/>
              <div className="animated fadeIn" style={{marginLeft: '-180px'}}>
                <Row>
                  {
                    accidentsList.length > 0 ?
                    <Map accidents={accidentsList} center={{ lat: -8.1278394000, lng: -79.0265921000 }} />
                    : <ProgressCircle/>
                  }
                </Row>
              </div>
            </main>
          </div>
        </div>
      </React.Suspense>
    );
  }
}
const mapStateToProps = state => ({
  accidents: state.accidents.accidents
})
export default connect(mapStateToProps, { AccidentGetAllApproved })(MappingPet);