import React from 'react';
import { Link } from 'react-router-dom';
import { ICardProps } from '../../Card';
import styles from './title.css';

export function Title(props:ICardProps) {
  const { title } = props;
  return (
    <h2 className={styles.title}>
      <Link to={{
        pathname: `/posts/post/${props.postID}`,
        state: props
        }} className={styles.postLink}>{title}</Link>
    </h2>
  );
}
