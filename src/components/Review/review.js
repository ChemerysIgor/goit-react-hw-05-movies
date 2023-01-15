import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmRewiev } from '../api';

export default function Rewiev() {
  const [reviews, setReview] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    try {
      getFilmRewiev(movieId).then(resp => setReview(resp.data.review));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      <div maxWidth="1000px">
        {reviews ? (
          <ul as={'ul'}>
            {reviews.map(review => {
              return (
                <li key={review.id}>
                  <h3>Author: {review.author}</h3>
                  <p>{review.content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </div>
    </>
  );
}
