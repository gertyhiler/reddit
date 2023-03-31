import React from 'react';
import { EIcon, Icon } from '../../../icon/Icon';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
  loading?: boolean
}

export function UserBlock({avatarSrc, username, loading}:IUserBlockProps) {
  return (
    <a 
    className={styles.userBox}
    href='https://www.reddit.com/api/v1/authorize?client_id=I6-sQrx07sk-asemopk70A&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
    >
      <div className={styles.avatarBox}>
        {avatarSrc 
          ? <img src={avatarSrc} className={styles.avatarImage}/>
          : <Icon width='50' height='50' iconName={EIcon.Anon}/>
        }
      </div>
      <div className={styles.username}>
        <span>
          {loading ? ("Загрузка...") : (username || "Аноним")}
        </span>
      </div>
    </a>
  );
}
