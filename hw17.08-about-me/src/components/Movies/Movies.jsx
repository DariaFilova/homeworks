import React from 'react';
import './Movies.scss';
import MovieItem from '../MoviesItem/MovieItem';

const Movies = () => {
  const movies = [
    {
      title: 'Interstellar',
      description:
        'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.',
      poster: 'https://img.fruugo.com/product/6/84/32299846_max.jpg',
    },
    {
      title: 'The life of David Gale',
      description:
        'A man against capital punishment is accused of murdering a fellow activist and is sent to death row.',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTAxMzU0NTgxNzZeQTJeQWpwZ15BbWU2MDQzNDkxNw@@._V1_.jpg',
    },
    {
      title: 'Man from Earth',
      description:
        'An impromptu goodbye party for Professor John Oldman becomes a mysterious interrogation after the retiring scholar reveals to his colleagues he has a longer and stranger past than they can imagine.',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMzQ5NGQwOTUtNWJlZi00ZTFiLWI0ZTEtOGU3MTA2ZGU5OWZiXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_.jpg',
    },
    {
      title: 'Changeling',
      description:
        'A grief-stricken mother takes on the LAPD to her own detriment when it stubbornly tries to pass off an obvious impostor as her missing child, while also refusing to give up hope that she will find him one day.',
      poster:
        'https://m.media-amazon.com/images/M/MV5BOTA1Mzg3NjIxNV5BMl5BanBnXkFtZTcwNzU2NTc5MQ@@._V1_.jpg',
    },
    {
      title: 'I am Sam',
      description:
        'A mentally handicapped man fights for custody of his 7-year-old daughter and in the process teaches his cold-hearted lawyer the value of love and family.',
      poster:
        'https://m.media-amazon.com/images/M/MV5BYzk5YTdmMzMtMjcyZS00ZDI4LThkMWItZDgwMzI0MzQyNDVjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg',
    },
    {
      title: 'Memoirs of a Geisha',
      description:
        'Nitta Sayuri reveals how she transcended her fishing-village roots and became one of Japans most celebrated geisha.',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTYxMzM4NTEzOV5BMl5BanBnXkFtZTcwNDMwNjQzMw@@._V1_FMjpg_UX1000_.jpg',
    },
  ];
  return (
    <div
      className='movies'
      id='movies'
    >
      <div className='container'>
        <h2>My favorite movies</h2>
        <div className='movies_wrapper'>
          {movies.map((movie) => (
            <MovieItem
              title={movie.title}
              description={movie.description}
              poster={movie.poster}
              key={movie.title}
            >
              <h1>Movie</h1>
            </MovieItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;

