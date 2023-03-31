import React, { useState } from 'react';
import { useUserAvatar } from '../../../../../../../hooks/useUserAvatar';
import { convertDate } from '../../../../../../../utils/convertDate';
import { EIcon, Icon } from '../../../../../../icon/Icon';

import { CommentForm } from '../../CommentForm';
import styles from './comment.css';

interface IReplice {
  data: {
    children: Array<IRepliceChildren>
  }
}

interface IRepliceChildren {
  data: ICommentProps
}

interface ICommentProps {
  author: string
  body?: string
  created: number
  replies?: "" | IReplice

}

export function Comment(props:ICommentProps) {
  const {author, body, created, replies} = props;
  const createdAt = convertDate(new Date(created * 1000));
  const userAvatarUrl = useUserAvatar(author);
  const [isAnswer, setAnswer] = useState(false);
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.counter}> 
        <button className={styles.counterUp}><Icon width='19' height='10' iconName={EIcon.KarmaBtn}/></button>
        <button className={styles.counterDown}><Icon width='19' height='10' iconName={EIcon.KarmaBtn}/></button>
      </div>
      <div className={styles.commentatorWrapper}>
          
          <div className={styles.avatarWrapper}>
            {userAvatarUrl
            ? <img src={userAvatarUrl} alt="avatar" />
            : <Icon width='50' height='50' iconName={EIcon.Anon}/>}
           
          </div>
          <span className={styles.username}>{author} </span>
          <span className={styles.created}>{createdAt}</span>
      </div>
      <p className={styles.commentText}>
      {body}
      </p>
      <div className={styles.control}>
        <ul className={styles.controlList}>
          <li>
            <button className={styles.controlBtn}
            onClick={() => {setAnswer(!isAnswer)}}>
              <Icon width='14' height='14' iconName={EIcon.Comment}/>
              <span className={styles.buttonText}>Ответить</span>
            </button>
          </li>
          <li>
            <button className={styles.controlBtn}>
              <Icon width='12' height='14' iconName={EIcon.Share}/>
              <span className={styles.buttonText}>Поделиться</span> 
            </button>
          </li>
          <li>
            <button className={styles.controlBtn}>
              <Icon width='16' height='14' iconName={EIcon.Report}/>
              <span className={styles.buttonText}>Пожаловаться</span> 
            </button>
          </li>
        </ul>
      </div>
      {isAnswer && <CommentForm answerName={author}/>}
      {
        replies !== '' && 
        replies?.data.children.map((replied) => {
          if (typeof replied.data.body === "undefined") return;
          return (
          <div>
            <Comment {...replied.data}/>
          </div>)
        })
      }
    </div>
  );
}
