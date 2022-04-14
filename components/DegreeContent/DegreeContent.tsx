import React from 'react';
import styles from './DegreeContent.module.scss';
import Image from 'next/image';
import images from '../../public/images';

import { weatherAPI } from '../../services/WeatherService';
import { useAppSelector } from '../../hooks/redux';

export const DegreeContent: React.FC = () => {
  const { sityName } = useAppSelector((state) => state.sityInputReducer);
  const { degreeIndex } = useAppSelector((state) => state.degreeIndexReducer);
  const { data, isLoading, error } = weatherAPI.useFetchWeatherInfoQuery(sityName);

  const [weatherTemp, setWeatherTemp] = React.useState<any>(0);
  const [weatherImage, setWeatherImage] = React.useState<any>(images.sun);

  const weatherImg = React.useRef<any>();

  React.useEffect(() => {
    setWeatherTemp(data?.main.temp);
  }, [data]);

  React.useEffect(() => {
    switch (data?.weather[0].id) {
      case 200:
      case 201:
      case 202:
      case 210:
      case 211:
      case 212:
      case 221:
      case 230:
      case 231:
      case 232:
        setWeatherImage(images.strom);
        document.querySelector('body')?.classList.add('storm');
        document
          .querySelector('body')
          ?.classList.remove('sunny', 'cloudy', 'rain', 'storm', 'fog', 'drizzle');
        weatherImg.current.classList.add('stormImg');
        weatherImg.current.classList.remove(
          'cloudyImg',
          'fogImg',
          'snowImg',
          'rainImg',
          'drizzleImg',
        );
        break;
      case 300:
      case 301:
      case 302:
      case 310:
      case 311:
      case 312:
      case 313:
      case 314:
      case 321:
      case 500:
      case 501:
      case 502:
        setWeatherImage(images.drizzle);
        document.querySelector('body')?.classList.add('drizzle');
        document.querySelector('body')?.classList.remove('sunny', 'cloudy', 'rain', 'storm', 'fog');
        weatherImg.current.classList.add('drizzleImg');
        weatherImg.current.classList.remove(
          'cloudyImg',
          'fogImg',
          'snowImg',
          'rainImg',
          'stormImg',
        );
        break;
      case 503:
      case 504:
      case 520:
      case 521:
      case 522:
      case 531:
        setWeatherImage(images.rain);
        document.querySelector('body')?.classList.add('rain');
        document
          .querySelector('body')
          ?.classList.remove('sunny', 'cloudy', 'storm', 'fog', 'drizzle');
        weatherImg.current.classList.add('rainImg');
        weatherImg.current.classList.remove(
          'cloudyImg',
          'fogImg',
          'snowImg',
          'drizzleImg',
          'stormImg',
        );
        break;
      case 600:
      case 601:
      case 602:
      case 611:
      case 612:
      case 613:
      case 615:
      case 616:
      case 620:
      case 621:
      case 622:
      case 511:
        setWeatherImage(images.snow);
        document.querySelector('body')?.classList.add('snow');
        document
          .querySelector('body')
          ?.classList.remove('sunny', 'cloudy', 'rain', 'storm', 'fog', 'drizzle');
        weatherImg.current.classList.add('snowImg');
        weatherImg.current.classList.remove(
          'cloudyImg',
          'fogImg',
          'rainImg',
          'drizzleImg',
          'stormImg',
        );
        break;
      case 701:
      case 711:
      case 721:
      case 731:
      case 741:
      case 751:
      case 761:
      case 762:
      case 771:
      case 781:
        setWeatherImage(images.fog);
        document.querySelector('body')?.classList.add('fog');
        document
          .querySelector('body')
          ?.classList.remove('sunny', 'cloudy', 'rain', 'storm', 'snow', 'drizzle');
        weatherImg.current.classList.add('fogImg');
        weatherImg.current.classList.remove(
          'cloudyImg',
          'snowImg',
          'rainImg',
          'drizzleImg',
          'stormImg',
        );
        break;
      case 800:
        setWeatherImage(images.sun);
        document.querySelector('body')?.classList.add('sunny');
        document.querySelector('body')?.classList.remove('snow', 'rain', 'storm', 'fog', 'drizzle');
        weatherImg.current.classList.add('sunnyImg');
        weatherImg.current.classList.remove(
          'cloudyImg',
          'fogImg',
          'snowImg',
          'rainImg',
          'drizzleImg',
          'stormImg',
        );
        break;
      case 801:
        setWeatherImage(images.partly_cloudy);
        document.querySelector('body')?.classList.add('cloudy');
        document
          .querySelector('body')
          ?.classList.remove('sunny', 'snow', 'rain', 'storm', 'fog', 'drizzle');
        weatherImg.current.classList.add('cloudyImg');
        weatherImg.current.classList.remove(
          'fogImg',
          'snowImg',
          'rainImg',
          'drizzleImg',
          'stormImg',
        );
        break;
      case 802:
        setWeatherImage(images.cloudy);
        document.querySelector('body')?.classList.add('cloudy');
        document
          .querySelector('body')
          ?.classList.remove('sunny', 'snow', 'rain', 'storm', 'fog', 'drizzle');
        weatherImg.current.classList.add('cloudyImg');
        weatherImg.current.classList.remove(
          'fogImg',
          'snowImg',
          'rainImg',
          'drizzleImg',
          'stormImg',
        );
        break;
      case 803:
      case 804:
        setWeatherImage(images.clouds);
        document.querySelector('body')?.classList.add('cloudy');
        document
          .querySelector('body')
          ?.classList.remove('sunny', 'snow', 'rain', 'storm', 'fog', 'drizzle');
        weatherImg.current.classList.add('cloudyImg');
        weatherImg.current.classList.remove(
          'fogImg',
          'snowImg',
          'rainImg',
          'drizzleImg',
          'stormImg',
        );
        break;
      default:
        setWeatherImage(images.sun);
        document.querySelector('body')?.classList.add('sunny');
        document.querySelector('body')?.classList.remove('snow', 'rain', 'storm', 'fog', 'drizzle');
        weatherImg.current.classList.add('sunnyImg');
        weatherImg.current.classList.remove(
          'cloudyImg',
          'fogImg',
          'snowImg',
          'rainImg',
          'drizzleImg',
          'stormImg',
        );
        break;
    }
  }, [data?.weather]);

  return (
    <>
      <div className={styles.contentWrapper}>
        <div ref={weatherImg}>
          <Image
            priority
            layout="responsive"
            id="weatherImage"
            src={weatherImage}
            width={200}
            height={200}
            alt="aboba"
          />
        </div>

        <div className={styles.degree}>
          {isLoading && '...'}
          {data && degreeIndex === 2
            ? `${Math.floor(weatherTemp)}°`
            : `${Math.floor(weatherTemp * 1.8 + 32)}°`}
        </div>
      </div>
      <div className={styles.description}>
        {isLoading && '...'} {data?.weather[0].description} {error && 'Ошибка'}
      </div>
      <div className={styles.fellsLike}>
        {isLoading && '...'}
        {data && `Ощущается как ${Math.floor(data?.main.feels_like)}º`}
        {error && 'Ошибка'}
      </div>
    </>
  );
};
