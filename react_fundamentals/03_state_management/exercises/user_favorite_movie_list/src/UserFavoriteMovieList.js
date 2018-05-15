import React, { Component } from 'react';

class UserFavoriteMovieList extends Component {
  render() {
    return (
      <ul>
        {this.props.profiles.map((profile) => {
          const userName = this.props.users[profile.userID].name;
          const favoriteMovieName = this.props.movies[profile.favoriteMovieID].name;

          return (
            <li key={profile.id}>
              <p>{`${userName} favorite movie is ${favoriteMovieName}`}</p>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default UserFavoriteMovieList;