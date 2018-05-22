/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import Movie from './Movie';
import { MovieGrid } from './StyledComponents';

class ComingSoonList extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=33d11acbd88e3cbb5ee457fe23524c57&language=en-US&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default ComingSoonList;
