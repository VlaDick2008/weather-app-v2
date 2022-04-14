import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { weatherAPI } from '../../services/WeatherService';
import styles from './DetailsComponent.module.scss';

export const DetailsComponent = () => {
  const { sityName } = useAppSelector((state) => state.sityInputReducer);
  const { data, isLoading, error } = weatherAPI.useFetchWeatherInfoQuery(sityName);

  const compassPoints = [
    'северный',
    'северно-восточный',
    'северо-восточный',
    'северо-восточный',
    'восточный',
    'юго-восточный',
    'юго-восточный',
    'юго-восточный',
    'южный',
    'юго-западный',
    'юго-западный',
    'юго-западный',
    'западный',
    'юго-западный',
    'северо-западный',
    'северо-западный',
  ];
  const rawPosition = Math.floor(data?.wind.deg / 22.5 + 0.5);
  const arrayPosition = rawPosition % 16;

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.detailsItem}>
        <div className={styles.detailsTitle}>Ветер</div>
        <div className={styles.detailsContent}>
          {isLoading && '...'} {data && `${data?.wind.speed} м/c, ${compassPoints[arrayPosition]}`}{' '}
          {error && 'Ошибка'}
        </div>
      </div>
      <div className={styles.detailsItem}>
        <div className={styles.detailsTitle}>Давление</div>
        <div className={styles.detailsContent}>
          {isLoading && '...'} {data && `${data?.main.pressure} мм рт. ст.`} {error && 'Ошибка'}
        </div>
      </div>
      <div className={styles.detailsItem}>
        <div className={styles.detailsTitle}>Влажность</div>
        <div className={styles.detailsContent}>
          {isLoading && '...'} {data && `${data?.main.humidity} %`} {error && 'Ошибка'}
        </div>
      </div>
    </div>
  );
};
