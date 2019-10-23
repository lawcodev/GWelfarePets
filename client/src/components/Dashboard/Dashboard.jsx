import React, { Component } from 'react';
import { Row } from 'reactstrap';
import CardView from '../../common/CardView'
import AuthService from '../../config/token';
import { Bar } from 'react-chartjs-2';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { COLOR_SECONDARY, COLOR_WARNING, COLOR_SUCCESS, DASHBOARD } from '../../config/config';
import Progress from '../../common/Progress'

const loading = () => <div className="animated fadeIn pt-1 text-center"><Progress/></div>

const barMaltratadas = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  datasets: [
    {
      label: 'Mascotas maltratadas',
      backgroundColor: 'rgba(225,99,132,0.2)',
      borderColor: `${COLOR_SECONDARY}`,
      borderWidth: 3,
      hoverBackgroundColor: 'rgba(255,99,122,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40, 25, 64, 98, 100, 15],
    },
  ],
};
const barPerdidas = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  datasets: [
    {
      label: 'Mascotas perdidas',
      backgroundColor: 'rgba(255,201,102,0.2)',
      borderColor: `${COLOR_WARNING}`,
      borderWidth: 3,
      hoverBackgroundColor: `${COLOR_WARNING}`,
      hoverBorderColor: `${COLOR_WARNING}`,
      data: [65, 59, 80, 81, 56, 55, 40, 25, 64, 98, 100, 15],
    },
  ],
};
const barAdoptadas = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  datasets: [
    {
      label: 'Mascotas perdidas',
      backgroundColor: 'rgba(0,153,1,0.2)',
      borderColor: `${COLOR_SUCCESS}`,
      borderWidth: 3,
      hoverBackgroundColor: `${COLOR_SUCCESS}`,
      hoverBorderColor: `${COLOR_SUCCESS}`,
      data: [65, 59, 80, 81, 56, 55, 40, 25, 64, 98, 100, 15],
    },
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countLostPet:''
    }
    this.Auth = new AuthService();
  }
  async componentDidMount() {
    if(!this.Auth.loggedIn()) {
      this.props.history.replace('/login')
    }
    else if(this.Auth.authorization() == false) {
      this.props.history.replace('/401')
    }
    this.replaceTitle()
  }
  replaceTitle() {
    document.title = `${DASHBOARD}`
  }
  render() {
    const {countLostPet} = this.state
    return (
      <React.Suspense fallback={loading()}>
        <div className="animated fadeIn">
          {/* Cardview - contadores */}
          <Row>
            <CardView lg='4' className='text-white bg-warning' text='MASCOTAS PERDIDAS' results={countLostPet === 0 ? '0' : 1}/>
            <CardView lg='4' className='text-white bg-danger' text='MASCOTAS MALTRATADAS' style={{background: `${COLOR_SECONDARY}`}} results={countLostPet === 0 ? '0' : 1}/>
            <CardView lg='4' className='text-white bg-success' text='MASCOTAS ADOPTADAS' results={countLostPet === 0 ? '0' : 7}/>
          </Row>
            {/* Mascotas maltratadas */}
            <Card>
              <CardHeader>
                Reporte estadístico de mascotas maltratadas
                <div className="card-header-actions">
                  <small className="text-muted">Geopetfare</small>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={barMaltratadas} options={options} />
                </div>
              </CardBody>
            </Card>
            {/* Mascotas maltratadas */}
            <Card>
              <CardHeader>
                Reporte estadístico de mascotas perdidas
                <div className="card-header-actions">
                  <small className="text-muted">Geopetfare</small>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={barPerdidas} options={options} />
                </div>
              </CardBody>
            </Card>
            {/* Mascotas adoptadas */}
            <Card>
              <CardHeader>
                Reporte estadístico de mascotas adoptadas
                <div className="card-header-actions">
                  <small className="text-muted">Geopetfare</small>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={barAdoptadas} options={options} />
                </div>
              </CardBody>
            </Card>
        </div>
      </React.Suspense>
    );
  }
}

export default Dashboard;
