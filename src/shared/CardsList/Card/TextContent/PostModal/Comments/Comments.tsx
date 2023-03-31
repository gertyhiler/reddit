import React, { useEffect, useState } from 'react';
import { usePostCommentsData } from '../../../../../../hooks/usePostCommentsData';
import { EmptyResponse } from '../../../../../EmptyResponse';
import { ICardProps } from '../../../Card';
import { Comment } from './Comment/Comment';
import styles from './comments.css';

export function Comments(props:ICardProps) {
  const {username, postID} = props;
  const comments = usePostCommentsData(username, postID);
  const [isLoading, setIsLoading] = useState(true);
  const [isCommentEmpty, setIsCommentEmpty] = useState(true);

  useEffect(() => {
    if (comments.length) {
      setIsLoading(false);
      setIsCommentEmpty(false);
    } else {
      setIsLoading(false);
      setIsCommentEmpty(true);
    }

  }, [comments]);
 
  return (
    <div className={styles.commentWrapper}>

      <div className={styles.commentsSorted}>
        <span className={styles.commentSortedText}>Сортировать по: <button className={styles.commentSortedBtn}>Лучшее</button></span>
      </div>
      {!isLoading && isCommentEmpty && (<EmptyResponse/>)}
      {!isLoading && !isCommentEmpty && (
        <div className={styles.comments}>
        {comments.map(({data}) => {
          if (typeof data.body === "undefined") return;
          return (<Comment key={data.id} {...data}/>);
        }
        )}
      </div>
      )}
    </div>
  );
}
