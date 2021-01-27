import logo from './logo.svg';
import './App.css';
import React from 'react';
import {initNotification} from './firebaseService';

function App() {
  return (
    <div className="App">
          Learn React
          <button onClick={initNotification}>
            Configure Notification
            </button>
    </div>
  );
}

export default App;
