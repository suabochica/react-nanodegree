import React, { Component } from 'react';

class UserList extends Component {
  render() {
    const { users, usersWhoLikedMovie } = this.props;

    if(!usersWhoLikedMovie || usersWhoLikedMovie.length ===0) {
      return <p>None of the current users liked this movie</p>
    }

    const userList = usersWhoLikedMovie.map((userId) => (
      <li key={userId}>
        <p>{users[userId].name}</p>
      </li>
    ));

    return (
      <ul>
        {userList}
      </ul>
    )
  }
}

export default UserList;