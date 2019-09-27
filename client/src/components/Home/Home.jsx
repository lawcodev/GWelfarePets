import React, { Component, Suspense } from 'react';
import {
  AppFooter,
  AppHeader,
} from '@coreui/react';

const DefaultFooter = React.lazy(() => import('../../containers/DefaultLayout/DefaultFooter'));
const DefaultHeader = React.lazy(() => import('../../containers/DefaultLayout/DefaultHeader'));

class Home extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }
  onSignAdmi(e) {
    e.preventDefault()
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)} onSignAdmi={e=>this.onSignAdmi(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <main className="main">
            <h1>Panel de usuarios</h1>
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

export default Home;
