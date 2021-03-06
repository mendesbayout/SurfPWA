import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Forecast from './components/Forecast/Forecast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
  font-family: 'Raleway', sans-serif;

  
`;
// test

class App extends Component {
  state = {
    spotName: 'pecado',
    spotId: 3882
  };

  change = _ => {
    if (this.state.spotName === 'pecado') {
      this.setState({ spotName: 'carapebus', spotId: 5104 });
    } else {
      this.setState({ spotName: 'pecado', spotId: 3882 });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="wrapper">
            <Sidebar />
            <Content>
              <Navbar spotName={this.state.spotName} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Forecast
                      {...props}
                      change={this.change}
                      value={this.state.spotName}
                      spotId={this.state.spotId}
                    />
                  )}
                />
              </Switch>
            </Content>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
