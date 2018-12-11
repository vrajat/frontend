import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';
import { Helmet} from "react-helmet";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./components/DbApp'),
  loading
});

class App extends Component {
 render() {
    return (
      <div className="app">
        <Helmet>
          <title>dblint.io</title>
        </Helmet>
        <HashRouter>
            <Switch>
              <Route path="/" name="Home" component={DefaultLayout} />
            </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
