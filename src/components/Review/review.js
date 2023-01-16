import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmRewiev } from 'components/api';
import { Box } from 'components/Box';

export default function Rewiev() {
  const [reviews, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      getFilmRewiev(movieId).then(resp => {
        setReview(resp.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  console.dir(reviews);

  if (reviews) {
    return (
      <>
        <Box maxWidth="1000px">
          {reviews.length === 0 ? (
            <p>We don't have any reviews for this movie.</p>
          ) : (
            <ul as={'ul'}>
              {reviews.map(review => {
                console.log(review);
                return (
                  <li key={review.id}>
                    <h3>Author: {review.author}</h3>
                    <p>{review.content}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </Box>
      </>
    );
  }
}
