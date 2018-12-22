import React, { Component } from 'react';
import {getUser} from './api';
import {loadingData} from './actions';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={getUser}>Click Here To Get User</button>
      </div>
    );
  }
}

const mapStateToProp=({fetchedData})=>{
 return {
   fetchedData
 }
}

const mapDispatchToProp=(dispatch)=>{
  return {
    onFetchUser : () => { dispatch( )}
  }
}

export default connect(mapStateToProp,mapDispatchToProp)(App);
