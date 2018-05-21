import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';
import ImageInput from './ImageInput';

class CreateContact extends Component {
  handleSubmit = (event) => {
    const values = serializeForm(event.target, { hash: true });

    event.preventDefault();

    if (this.props.onCreateContact) {
      this.props.onCreateContact(values);
    }

  }

  render() {
    return (
      <div>
        <Link
          className='close-create-contact'
          to='/'
        >
          Close
        </Link>

        <form
          className='create-contact-form'
          onSubmit={this.handleSubmit}
        >
          <ImageInput
            className='create-contact-avatar-input'
            name='avatarURL'
            maxHeight={64}
          />
          <div className='create-contact-details'>
            <input type='text' name='name' placeholder='Name'/>
            <input type='text' name='handle' placeholder='Handle'/>
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateContact;
