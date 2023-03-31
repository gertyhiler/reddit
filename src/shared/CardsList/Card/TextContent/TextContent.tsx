import React from 'react';
import { ICardProps } from '../Card';
import styles from './textcontent.css';
import { Title } from './Title';
import { UserLink } from './UserLink';
export function TextContent(props:ICardProps) {
  const { createdAt, username, icon_img, userURL } = props;
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
      <UserLink {...{username, icon_img, userURL}} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>Опубликовано </span>{createdAt}</span>
      </div>
      <Title {...props}/>
    </div>
  );
}
