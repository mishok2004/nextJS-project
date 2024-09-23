'use client'; // This is a client component 👈🏽

import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent } from 'react';
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

  const changeDisplay = (rating: number) => {
    if (!isEditebel) {
      return;
    }
    constructorRating(rating);
  };

  const onclick = (rating: number) => {
    if (!isEditebel || !setRating) {
      return;
    }
    setRating(rating);
  };

  const handlSpace = (rating: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != 'Space' || !setRating) {
      return;
    }
    setRating(rating);
  };

  const constructorRating = (currentRating: number) => {
    const updateArray = ratingArray.map((el: JSX.Element, index: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.editable]: isEditebel,
          })}
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onclick(index + 1)}
        >
          <StarIcon
            tabIndex={isEditebel ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditebel && handlSpace(index + 1, e)
            }
          />
        </span>
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
