'use client'; // This is a client component 👈🏽

import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import StarIcon from './star.svg';

export const Rating = ({
  isEditebel = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>),
  );

  useEffect(() => {
    constructorRating(rating);
  }, [rating]);

  const constructorRating = (currentRating: number) => {
    const updateArray = ratingArray.map((el: JSX.Element, index: number) => {
      return (
        <StarIcon
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
          })}
        />
      );
    });
    setRatingArray(updateArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((el, index) => (
        <span key={index}>{el}</span>
      ))}
    </div>
  );
};
