import React, { Component} from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import { Provider } from './context';
import AddContact from './components/contacts/AddContact';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
        <Header title = "Contact Manager"/>
        <div className="container">
          <AddContact />
          <Contacts />
        </div>

      </div>
      </Provider>

    );
  }
}

export default App;
