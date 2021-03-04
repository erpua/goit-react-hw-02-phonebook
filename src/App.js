import React, { Component } from 'react';

/* Libraries */
/* import uuid from 'uuid'; */

/* Components */
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  render() {
    return (
      <>
        <h1>APP</h1>;
        <ContactForm />
        <ContactList />
        <Filter />
      </>
    );
  }
}

export default App;
