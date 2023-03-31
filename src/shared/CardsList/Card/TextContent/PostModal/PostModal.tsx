import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory, useParams } from 'react-router-dom';
import { convertDate } from '../../../../../utils/convertDate';
import { postControlsList } from '../../../../Dropdown/exemples/postControlsList';
import { List } from '../../../../Dropdown/List';
import { Loader } from '../../../../icon/loader';
import { ICardProps } from '../../Card';
import { KarmaCounter } from '../../Сontrols/KarmaCounter';
import { TextContent } from '../TextContent';
import { CommentForm } from './CommentForm';
import { Comments } from './Comments';
import styles from './postmodal.css';

interface LinkParam {
  id: string
}

export function PostModal() {
  const history = useHistory();
  const urlParam = useParams<LinkParam>();

  const [postData, setPostData] = useState<ICardProps>({
    key: "",
    postID: "",
    thumbnail: "",
    title: "",
    createdAt: "",
    username: "",
    icon_img: '',
    score: 0,
    comments: 0,
    postURL: "",
    userURL: "",
    upvote_ratio: 0,
    isTitleClickable: false
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const node = document.getElementById("react-modal");
  if (!node) return null;

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function hendelClick(e: MouseEvent) {
      if(e.target === modalRef.current) history.push('/posts/');
    }
    if (!modalRef.current) return;
    modalRef.current.addEventListener('click', hendelClick);

    return () => {
      modalRef.current?.removeEventListener('click', hendelClick);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios.get(
      `https://www.reddit.com/r/technology/api/info.json?sr_details=true&id=t3_${urlParam.id}`,
    ).then(({data: {data: {children}}}) => {
      setPostData({
        key: children[0].data.id,
        postID: children[0].data.id,
        thumbnail: children[0].data.thumbnail,
        title: children[0].data.title,
        createdAt: convertDate(new Date(children[0].data.created * 1000)) ,
        username: children[0].data.subreddit_name_prefixed,
        icon_img: '',
        score: children[0].data.score,
        comments: children[0].data.num_comments,
        postURL: children[0].data.permalink,
        userURL: children[0].data.author_fullname,
        upvote_ratio: children[0].data.upvote_ratio,
        isTitleClickable: false
      });
      setIsLoading(false);
    }).catch((e) => {
      setIsLoading(false);
      console.error(e);
    });
  },[])

  return ReactDOM.createPortal ((
    <div className={styles.modal} ref={modalRef}>
      {isLoading && (<div> <Loader/> </div>)}
      {!isLoading && 
        (
          <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
              <KarmaCounter {...{score: postData.score}}/>
              <TextContent {...postData} postURL='#userPost' isTitleClickable={false}/>
            </div>
            <div className={styles.controls}>
              <List arrayLiItem={postControlsList} isDropdown={false} comments={postData.comments}/>
              <span className={styles.controlsText}>{`${postData.upvote_ratio * 100}% Проголосовали`}</span>
            </div>
            <CommentForm/>
            <Comments {...postData}/>
          </div>
        )
      }
    </div>
    ), node
  );
}
