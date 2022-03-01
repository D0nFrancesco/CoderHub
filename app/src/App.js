// styling
import './styling/main.scss';

import React, { Component, Fragment } from 'react';
import { BrowserRouter} from "react-router-dom";

// routes
import Routers from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          {/* public routes */}
          <Routers />
          {/* private routes will be implemented later */}
        </Fragment>
      </BrowserRouter>    
    );
  }
}

export default App;