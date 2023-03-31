import React from 'react';
import { ICardProps } from '../Card';
import styles from './preview.css';

interface IPreviewProps {
    thumbnail: string
}

export function Preview({thumbnail}:Pick<ICardProps, "thumbnail">) {
  return (
    <div
      className={styles.preview}>
        <img
          src={thumbnail === 'self' || thumbnail === 'nsfw' || thumbnail === 'default' ?
              "https://cdn.dribbble.com/userupload/4027430/file/original-2dec48cfbbcef11346dc39ecddb8e3c7.png?compress=1&resize=400x300&vertical=top"
              : thumbnail
        }
          alt=""
          className={styles.previewImg} />
    </div>
  );
}