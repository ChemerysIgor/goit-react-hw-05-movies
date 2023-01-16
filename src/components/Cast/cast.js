import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCast } from '../api';
import defaultImage from '../../image/default-img.png';
import { CastItem, UL } from './CastStyled';
import { Box } from 'components/Box';

export default function Cast() {
  const [cast, setCast] = useState();
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    try {
      getFilmCast(movieId).then(resp => setCast(resp.data.cast));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (!cast) {
    return;
  }
  return (
    <>
      <UL>
        {cast.map(actor => {
          const profile = actor.profile_path
            ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
            : defaultImage;

          return (
            <CastItem key={actor.id}>
              <img src={profile} alt="" width="250px" />
              <Box p="5px">
                <p>{actor.name}</p>
                <p>Character : {actor.character}</p>
              </Box>
            </CastItem>
          );
        })}
      </UL>
    </>
  );
}
