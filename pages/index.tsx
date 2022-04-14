import type { NextPage } from 'next';
import { SityField } from '../components/SityField/SityField';
import styles from '../styles/Home.module.scss';
import { DegreeSwitch } from '../components/DegreeSwitch/DegreeSwitch';
import { DegreeContent } from '../components/DegreeContent/DegreeContent';
import { DetailsComponent } from '../components/DetailsComponent/DetailsComponent';

import 'normalize.css';

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.header}>
          <SityField />
          <DegreeSwitch />
        </div>
        <div className={styles.content}>
          <DegreeContent />
        </div>
        <div className={styles.details}>
          <DetailsComponent />
        </div>
      </div>
    </>
  );
};

export default Home;
