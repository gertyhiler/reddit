import React from 'react';
import styles from './userlink.css';

interface IUserLink {
  username: string
  icon_img: string
  userURL: string
}

export function UserLink({username, icon_img, userURL}:IUserLink) {
  return (
    <div className={styles.userLink}>
      <a href={userURL} className={styles.username}>
        <img 
          src={icon_img}
          alt=""
          className={styles.avatar}/>
        {username}</a>
    </div>
  );
}
