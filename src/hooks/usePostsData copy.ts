import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PostRequset, PostRequsetError, PostRequsetSuccsess } from "../redux/posts/actions";
import { paginationAction } from "../redux/posts/pagination/action";
import { rootReducer, store } from "../redux/rootStore";



export function usePostsData() {
  const token = useSelector<rootReducer>(state => state.token.token)
  const after = useSelector<rootReducer> (state => state.pagination)

  useEffect(() => {
    store.dispatch(PostRequsetError(''));
      if (token !== "" && token !== 'undefined') {
        store.dispatch(PostRequset())
        axios.get(
          `https://oauth.reddit.com/best.json?sr_detail=true&after=${after}`, {
            headers: {Authorization: `bearer ${token}`}
          },
        ).then((res) => {
          store.dispatch(PostRequsetSuccsess(res.data.data.children));
          store.dispatch(paginationAction(res.data.data.after));
        }).catch((error) => {
          store.dispatch(PostRequsetError(String(error)));
        });
      }
    }, [token]);

  return
}