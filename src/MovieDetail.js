/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';

class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=33d11acbd88e3cbb5ee457fe23524c57&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default MovieDetail;
