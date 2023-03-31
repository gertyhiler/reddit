import React, { useEffect, useRef, useState } from 'react';
import {Card} from './Card';
import styles from './cardslist.css';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducer } from '../../redux/rootStore';
import { PostState } from '../../redux/posts/reduser';
import { convertDate } from '../../utils/convertDate';
import { postAsyncRequst } from '../../redux/posts/actions';
import { isLoadMoreAction } from '../../redux/posts/paginationLimit/actions';
import { Action } from 'redux';

const REDDIT_URL = "https://www.reddit.com/";

export interface IPostData {
  data: {
    id: string
    thumbnail: string
    title: string
    subreddit_name_prefixed: string
    score: number
    created_utc: number
    num_comments: number
    permalink: string
    url: string
    upvote_ratio: number
    sr_detail: {
      icon_img: string
    }
  }
}

export function CardsList() {
  const postData = useSelector<rootReducer, PostState>((state) => state.post);
  const token = useSelector<rootReducer> ((state) => state.token.token);
  const [isFinishListing, setIsFinishListing] = useState<boolean>(false);
  const isLoadMore = useSelector<rootReducer>((state)=> state.paginationLimit.isLoadMore);
  const finishListingRef = useRef<HTMLDivElement>(null);
  const dispath = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      setIsFinishListing(e[0].isIntersecting);
      if (isFinishListing && token && isLoadMore) {
        dispath(postAsyncRequst());
      }
    }, {
      rootMargin: "50px",
    });

    if (finishListingRef.current) {
      observer.observe(finishListingRef.current);
    }
    return () => {
      if (finishListingRef.current) {
        observer.unobserve(finishListingRef.current)
      }
    }
  }, [isFinishListing, isLoadMore]);

  return (
    <ul 
      className={styles.cardsList}
    >
     
     

      {postData.data.map(({data}:IPostData) => {
        return (
        < Card
        key = {data.id}
        {...
          {
            thumbnail: data.thumbnail,
            title: data.title,
            createdAt: convertDate(new Date(data.created_utc * 1000)),
            username: data.subreddit_name_prefixed,
            icon_img: data.sr_detail.icon_img,
            score: data.score,
            comments: data.num_comments,
            postURL:  `${REDDIT_URL}${data.permalink}`,
            userURL: `${REDDIT_URL}${data.url}`,
            upvote_ratio: data.upvote_ratio,
            postID: data.id,
          }
        }
        />)
      })}
       {postData.loading && (<div style={{textAlign: 'center'}}>Загрузка...</div>)}
       {!postData.loading && postData.error !== '' && (<div style={{textAlign: 'center'}}>{postData.error}</div>)}
      <div ref={finishListingRef}></div>
      {!isLoadMore && (
      <div style={{textAlign: 'center'}}>
        <button
        onClick={() => {dispath(isLoadMoreAction(true))}}
        >Загрузить еще...</button>
        </div>
      )}
    </ul>

  );
}
export { convertDate };

