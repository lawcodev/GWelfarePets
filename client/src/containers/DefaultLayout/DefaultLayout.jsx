import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import { AUTHENTICATION_LOGOUT} from '../../config/httpService'
import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
import navigation from '../../components/Sidebar';
import routes from '../../components/Routes';
import AuthService from '../../config/token';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
  constructor(props) {
    super(props)
    this.Auth = new AuthService();
  }
  loading = () => <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  componentDidMount() {
  }
  async signOut(e) {
    e.preventDefault()
    await AUTHENTICATION_LOGOUT()
    this.props.history.push('/')
  }
  functionRedirect(nameRedirect) {
    this.props.history.push(nameRedirect)
  }
  onSignAdmi(e) {
    e.preventDefault()
    this.functionRedirect('/dashboard')
  }
  onHandleDetail(e) {
    e.preventDefault()
  }
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)} onSignAdmi={e=>this.onSignAdmi(e)} onHandleDetail={e=>this.onHandleDetail(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
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
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
