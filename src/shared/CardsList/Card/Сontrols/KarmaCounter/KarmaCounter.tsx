import React from 'react';
import { EIcon, Icon } from '../../../../icon/Icon';
import styles from './karmacounter.css';
interface IKarmaCounter {
    score: number
}
export function KarmaCounter({score}: IKarmaCounter) {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <Icon width='19' height='10' iconName={EIcon.KarmaBtn} />
      </button>
      <span className={styles.karmaValue}>{score}</span>
      <button className={styles.down}>
        <Icon width='19' height='10' iconName={EIcon.KarmaBtn} />
      </button>
    </div>
  );
}
