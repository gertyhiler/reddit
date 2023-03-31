import React from 'react';
import { EmptyResponse } from '../EmptyResponse';
import styles from './pagenotfound.css';

export function PageNotFound() {
  return (
    <EmptyResponse text='404... страница не найдена. Может, её похитили инопланетные индусы?'/>
  );
}
