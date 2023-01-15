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

export default function Movies() {
  // const [formValue, setFormValue] = useState('');
  const [movies, setMovie] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const changeValue = evt => {
    evt.preventDefault();
    setSearchParams({ filter: evt.currentTarget[0].value });
  };
  const filter = searchParams.get('filter');
  console.log(filter);

  useEffect(() => {
    if (!filter) {
      return;
    }

    getFilmByQuery(filter).then(resp => setMovie(resp.data.results));
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
          console.log(movie.id);
          return (
            <li key={movie.id}>
              <StyledLink to={`${movie.id}`} state={{ from: location }}>
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
