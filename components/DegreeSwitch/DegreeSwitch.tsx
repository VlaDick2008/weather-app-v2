import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { degreeSlice } from '../../store/reducers/DegreeSlice';
import styles from './DegreeSwitch.module.scss';

export const DegreeSwitch: React.FC = () => {
  const buttonRef = React.useRef<HTMLDivElement | null>(null);

  const { setDegreeIndex } = degreeSlice.actions;
  const dispatch = useAppDispatch();

  //Я так и не раскусил, какой же должен быть тип у 'event' тут :P
  const handleClick = (e: any) => {
    const foo = document.querySelectorAll<HTMLElement>('#button');

    for (let i = 0; i < foo.length; i++) {
      foo[i].classList?.toggle('active');
      dispatch(setDegreeIndex(2));
      if (foo[i].classList.contains('active')) {
        dispatch(setDegreeIndex(1));
      }
    }
  };

  return (
    <div>
      <div className={styles.degreeBlock}>
        <span>º</span>
        <div
          onClick={handleClick}
          id="button"
          ref={buttonRef}
          className={`${styles.celsius} active transition`}>
          C
        </div>
        <div
          onClick={handleClick}
          id="button"
          ref={buttonRef}
          className={`${styles.farenheit} transition`}>
          F
        </div>
      </div>
    </div>
  );
};
