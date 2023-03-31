import React from 'react';
import { EIcon, Icon } from '../../../../icon/Icon';
import styles from './commentsbutton.css';

interface ICommentsButtonProps {
    comments: number
}

export function CommentsButton({comments}:ICommentsButtonProps) {
  return (
    <button className={styles.commentsButton}>
      <Icon width='15' height='15' iconName={EIcon.Comment} />
      <span className={styles.commentsNumber}>{comments}</span>
    </button>
  );
}
