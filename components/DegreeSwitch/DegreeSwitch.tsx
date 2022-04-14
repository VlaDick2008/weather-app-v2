import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { degreeSlice } from '../../store/reducers/DegreeSlice';
import styles from './DegreeSwitch.module.scss';

export const DegreeSwitch: React.FC = () => {
  const buttonsRef = React.useRef<HTMLDivElement | null>(null);

  const { setDegreeIndex } = degreeSlice.actions;
  const dispatch = useAppDispatch();
  const { degreeVisible } = useAppSelector((state) => state.degreeIndexReducer);

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

  React.useEffect(() => {
    if (!degreeVisible) {
      buttonsRef.current?.classList.add('hidden');
    } else {
      buttonsRef.current?.classList.remove('hidden');
    }
  }, [degreeVisible]);

  return (
    <div>
      <div ref={buttonsRef} className={styles.degreeBlock}>
        <span>º</span>
        <div onClick={handleClick} id="button" className={`${styles.celsius} active transition`}>
          C
        </div>
        <div onClick={handleClick} id="button" className={`${styles.farenheit} transition`}>
          F
        </div>
      </div>
    </div>
  );
};
