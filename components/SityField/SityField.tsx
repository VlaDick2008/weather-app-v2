import React from 'react';
import Image from 'next/image';
import images from '../../public/images';

import styles from './SityField.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { sityInputSlice } from '../../store/reducers/SityInputSlice';
import { degreeSlice } from '../../store/reducers/DegreeSlice';

export const SityField: React.FC = () => {
  const changeInput = React.useRef<HTMLInputElement | null>(null);
  const changeInputBtns = React.useRef<HTMLDivElement | null>(null);

  const [inputState, enableInput] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>('Омск');
  const [inputBtnsState, moveInputBtns] = React.useState<boolean>(false);
  const [positionData, setPosition] = React.useState<any>([]);

  const dispatch = useAppDispatch();
  const { setSity } = sityInputSlice.actions;
  const { sityName } = useAppSelector((state) => state.sityInputReducer);
  const { setDegreeVisibylity } = degreeSlice.actions;

  React.useEffect(() => {
    if (inputState) {
      changeInput.current?.removeAttribute('disabled');
      dispatch(setDegreeVisibylity(false));
    } else {
      changeInput.current?.setAttribute('disabled', 'disabled');
      dispatch(setDegreeVisibylity(true));
    }

    if (inputBtnsState) {
      changeInputBtns.current?.classList.toggle(styles.whenInputActive);
    }

    setInputValue(sityName);
  }, [dispatch, inputBtnsState, inputState, setDegreeVisibylity, sityName]);

  const handleLocationClick = () => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${positionData[0]}&lon=${positionData[1]}&format=json&addressdetails=[0|1]`,
    )
      .then((resp) => resp.json())
      .then((result) => {
        dispatch(setSity(result.address.city));
      });
  };

  React.useEffect(() => {
    const error = () => {
      console.log(error);
    };

    const success = ({ coords }: any) => {
      const { latitude, longitude } = coords;
      const position = [latitude, longitude];
      setPosition(position);
    };

    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
    });
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Ваш город здесь..."
        className={`${styles.sityInput} transition`}
        ref={changeInput}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            enableInput(!inputState);
            dispatch(setSity(inputValue));
          }
        }}
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
      />
      <div ref={changeInputBtns} className={`${styles.sityBtnBlock} transition`}>
        <div
          onClick={() => {
            enableInput(!inputState);
            moveInputBtns(true);
          }}
          className={styles.sityBtn}>
          Сменить город
        </div>
        <Image
          width={18}
          height={18}
          className={styles.locationIco}
          src={images.location}
          alt="Among us"
        />
        <div onClick={handleLocationClick} className={styles.sityBtn}>
          Моё местоположение
        </div>
      </div>
    </div>
  );
};
