import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTokenThunk } from '../../redux/auth/actions';
import styles from './layout.css';

interface ILayoutProos {
  children?: React.ReactNode;
}

export function Layout({children}: ILayoutProos) {
  
  return (
    <div 
      className={styles.layout}
      >
      {children}
    </div>
  );
}
