import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import { AppFooter, AppHeader, AppSidebar, AppSidebarFooter, AppSidebarForm, AppSidebarHeader, AppSidebarMinimizer, AppBreadcrumb2 as AppBreadcrumb, AppSidebarNav2 as AppSidebarNav } from '@coreui/react';
import Sidebar from '../../components/Sidebar';
import routes from '../../components/Routes';
import AuthService from '../../config/token';
import Progress from '../../common/Progress'

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));
const loading = () => <div className="animated fadeIn pt-1 text-center"><Progress/></div> // Lo que hace esto es mostrar la barra de progreso en la parte superior de la aplicación

class DefaultLayout extends Component {
  constructor(props) {
    super(props)
    this.Auth = new AuthService();
  }
  functionRedirect(nameRedirect) {
    this.props.history.push(nameRedirect)
  }
  async signOut(e) {
    e.preventDefault()
    this.Auth.removeAuthorization()
    this.functionRedirect('/')
  }
  onSignAdmi(e) {
    e.preventDefault()
    this.functionRedirect('/dashboard')
  }
  onHandleDetail(e) {
    e.preventDefault()
  }
  onHome(e) {
    e.preventDefault()
    this.functionRedirect('/home')
  }
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={loading()}>
            <DefaultHeader onHome={e=>this.onHome(e)} onLogout={e=>this.signOut(e)} onSignAdmi={e=>this.onSignAdmi(e)} onHandleDetail={e=>this.onHandleDetail(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            <AppSidebarNav navConfig={Sidebar} {...this.props} router={router}/> {/* Aquí imprimes la lista (sidebar) y le pasas los props dependiendo del router */}
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Suspense fallback={loading()}>
                <Switch> {/* Aquí imprimimos todos los componentes establecidos en el router  */}
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )}/>
                    ):(null);
                  })}
                  <Redirect from="/" to="/extranet" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter>
          <Suspense fallback={loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
