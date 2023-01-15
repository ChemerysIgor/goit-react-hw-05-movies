import { useEffect } from 'react';
import { StyledList, StyledLink, ListItem } from './HomepageStyled';
import { useState } from 'react';
import { getTrendFilms } from 'components/api';

export default function Homepage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    try {
      getTrendFilms().then(res => {
        console.log(res);
        setFilms(res.data.results);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      <StyledList>
        {films.map(film => {
          return (
            <ListItem key={film.id}>
              <StyledLink to={`movies/${film.id}`}>
                {' '}
                {film.title ?? film.name}
              </StyledLink>
            </ListItem>
          );
        })}
      </StyledList>
    </>
  );
}
