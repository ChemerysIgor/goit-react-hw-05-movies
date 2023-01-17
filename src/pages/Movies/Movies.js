import { useState, useEffect } from 'react';
import { getFilmByQuery } from 'components/api';

import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import {
  StyledForm,
  StyledInput,
  StyledBtn,
  StyledList,
  StyledLink,
} from './MoviesStyled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function Movies() {
  // const [formValue, setFormValue] = useState('');
  const [movies, setMovie] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const changeValue = evt => {
    evt.preventDefault();
    if (!evt.currentTarget[0].value) {
      Notify.info('enter request');
    } else {
      setSearchParams({ filter: evt.currentTarget[0].value });
    }
  };
  const filter = searchParams.get('filter') ?? '';
  console.log(filter);

  useEffect(() => {
    if (!filter) {
      return;
    }
    try {
      getFilmByQuery(filter).then(response => {
        if (response.data.results.length === 0) {
          Notify.failure(
            `We don't have any results rof this keyword, please try another`
          );
          return;
        }
        setMovie(response.data.results);
      });
    } catch (error) {
      Notify.failure('Opps... Something wrong(((');
    }
  }, [filter]);
  console.log(movies);

  return (
    <>
      <StyledForm onSubmit={changeValue}>
        <StyledInput type="text" />
        <StyledBtn type="submit">Search</StyledBtn>
      </StyledForm>
      <StyledList>
        {movies.map(movie => {
          console.log(movie.media_type);
          return (
            <li key={movie.id}>
              <StyledLink
                to={`${movie.id}`}
                state={{ from: location }}
                type={movies}
              >
                {' '}
                {movie.title ?? movie.name}
              </StyledLink>
            </li>
          );
        })}
      </StyledList>
    </>
  );
}
