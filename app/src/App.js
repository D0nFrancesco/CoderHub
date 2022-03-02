// styling
import './styling/main.scss';

import React, { Component, Fragment } from 'react';
import { BrowserRouter} from "react-router-dom";
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// routes
import Routers from './routes';

const alertOptions = {
  timeout: 3000,
  position: "top center",
  transition: "fade"
};

class App extends Component {
  render() {
    return (
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <BrowserRouter>
          <Fragment>
            {/* public routes */}
            <Routers />
            {/* private routes will be implemented later */}
          </Fragment>
        </BrowserRouter>
      </AlertProvider>
    );
  }
}

export default App;