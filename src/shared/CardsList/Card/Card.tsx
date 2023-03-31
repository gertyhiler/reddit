import React from 'react';
import styles from './card.css';
import { Menu } from './Menu'; // Munu_6 Test leasson component
import { Preview } from './Preview';
import { TextContent } from './TextContent';
import { Сontrols } from './Сontrols';

export interface ICardProps {
    key: string
    postID: string
    thumbnail: string
    title: string
    createdAt: string
    username: string
    icon_img: string
    score: number
    comments: number
    postURL: string
    userURL: string
    upvote_ratio: number
    isTitleClickable?: boolean
}

export function Card(props:ICardProps) {
  const {thumbnail, score, comments} = props;
  return (
    <li className={styles.card}>
      <TextContent {...props}/>
      <Preview {...{thumbnail}} />
      <Menu/>
      <Сontrols {...{score, comments}} />
    </li>
  );
}
