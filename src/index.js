import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

import registerServiceWorker from './registerServiceWorker';

//Define UI framework
import 'semantic-ui-css/semantic.min.css';

// Define routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();