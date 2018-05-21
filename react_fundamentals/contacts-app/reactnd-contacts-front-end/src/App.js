import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: [],
  }

  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        }))
      })
  }

  removeContact = (contact) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((filteredContact) => {
        return filteredContact.id !== contact.id
      })
    }))

    ContactsAPI.remove(contact);
  };

  render() {
    return (
      <div>
        <Route
          exact path='/'
          render={() => (
            <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
            onNavigate={() => {
              this.setState(() => ({
                screen: 'create'
              }))
            }}
          />
          )}
        />

        <Route
          path='/create'
          component = {CreateContact}
        />
      </div>
    );
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default App;
