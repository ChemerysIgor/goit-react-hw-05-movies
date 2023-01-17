import { useEffect } from 'react';
import { StyledList, StyledLink, ListItem } from './HomepageStyled';
import { useState } from 'react';
import { getTrendFilms } from 'components/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function Homepage() {
  const [films, setFilms] = useState([]);
  // const [type, setType] = useState([]);
  // console.log(getType);
  useEffect(() => {
    try {
      getTrendFilms().then(res => {
        console.log(res.data.results);
        setFilms(res.data.results);
        // setType(res.data.results.media_type);
      });
    } catch (error) {
      Notify.failure(`Something wrong`);
    }
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      <StyledList>
        {films.map(film => {
          // onChange(film);
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
