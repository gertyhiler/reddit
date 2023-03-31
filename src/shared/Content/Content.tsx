import React from 'react';
import styles from './content.css';

interface IContentPrps {
  children?: React.ReactNode
}

export function Content({children}: IContentPrps) {
  return (
    <main className={styles.content}>
      {children}
    </main>
  );
}
