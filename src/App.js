import React, { Component } from 'react';
import './styles/sb-admin-2.min.css';
import './styles/custom.css';
import Routes from './routes';


class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
