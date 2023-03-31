import axios from "axios";
import { useEffect, useState } from "react";
import { store } from "../redux/rootStore";



export interface IPostCommentData {
  data: {
    author: string
    id: string
    body: string
    created: number
  }
}

export function usePostCommentsData(subreddit: string, articleID: string) : Array<IPostCommentData> {
  const token = store.getState().token.token;
  const [commentsData, setCommentsData] = useState([]);
  
  useEffect(() => {
    axios.get(
      `https://oauth.reddit.com/${subreddit}/comments/${articleID}.json`, {
        headers: {Authorization: `bearer ${token}`}
      }
    ).then((res) => {
      setCommentsData(res.data[1].data.children);
    }).catch(console.log)
  }, []);
  return commentsData;
}