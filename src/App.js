import React from 'react';
import logo from './logo.svg';
import './App.css';

import { withLDProvider } from 'launchdarkly-react-client-sdk';

import HelloWorld from './helloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
      </header>
    </div>
  );
}

export default withLDProvider({
  clientSideID: '5d38a5f798a76e06ef03ea79',//this is env id (PRD or TEST)
  user: {
      "key": "2", //percentage rollout
      "secondary": "0f382c9d-1cab-4286-b99a-8c5def1ae000",
      "name": "User Name",
      "email": "User@ubiquity6.com",
      "country": "United State",
      "ip": "4.16.196.158", //we have to provide the ip, really ?!?!
      "custom" : { //this is how to define custom attribute
        "groups": "beta_testers"
      },
  }
})(App);
