// styling
import './styling/main.scss';

import React, { Component, Fragment, Suspense } from 'react';
import { BrowserRouter} from "react-router-dom";
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// routes
import Routers from './routes';

// components
import Spinner from 'react-bootstrap/Spinner';

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
            <Suspense 
              fallback={
                <div className='loader'>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              }
            >
              {/* public routes */}
              <Routers />
              {/* private routes will be implemented later */}
            </Suspense>
          </Fragment>
        </BrowserRouter>
      </AlertProvider>
    );
  }
}

export default App;