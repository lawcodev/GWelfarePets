import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import store from './helper/store'
import { Provider } from 'react-redux';
import Progress from './common/Progress'

const loading = () => <div className="animated fadeIn pt-3 text-center"><Progress/></div>;
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout/DefaultLayout'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Register = React.lazy(() => import('./components/Register/Register'));
const Page404 = React.lazy(() => import('./components/NotFound/Page404'));
const Page500 = React.lazy(() => import('./components/ErrorServer/Page500'));
const Home = React.lazy(() => import('./components/Home/Home'))
const Extranet = React.lazy(() => import('./components/Extranet/Extranet'))
const Adopta = React.lazy(()=> import('./components/Espouse/Espouse'))
const Questions = React.lazy(() => import('./components/Questions/Questions'))
const DetailAdoption = React.lazy(() => import('./components/DetailAdoption/DetailAdoption'))
const DetailUser = React.lazy(() => import('./components/DetailUser/DetailUser'))
const MappingPet = React.lazy(() => import('./components/MappingPet/MappingPet'))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/401" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route exact path="/Home" name="Home" render={props => <Home {...props}/>} />
              <Route exact path="/" name="Extranet" render={props => <Extranet {...props}/>} />
              {/* Rutas del home */}
              <Route exact path="/adopta" name="Adopta" render={props => <Adopta {...props}/>}/>
              <Route exact path="/adopta/:id" name="Adopta" render={props => <DetailAdoption {...props}/>}/>
              <Route exact path="/mapeo" name="Mapeo de mascotas" render={props => <MappingPet {...props}/>}/>
              <Route exact path="/perfil/:id" name="User" render={props => <DetailUser {...props}/>}/>
              <Route exact path="/Faq" name="Preguntas frecuentes" render={props => <Questions {...props}/>}/>
              <Route path="/" name="Dashboard" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
