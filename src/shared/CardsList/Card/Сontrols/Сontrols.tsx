import React from 'react';
import { CommentsButton } from './CommentsButton';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';
import styles from './сontrols.css';

interface IControls {
    score: number
    comments: number
}

export function Сontrols({score, comments}: IControls) {
  return (
    <div
    className={styles.controls}>
      <KarmaCounter score={score} />
      <CommentsButton {...{comments}}/>
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
