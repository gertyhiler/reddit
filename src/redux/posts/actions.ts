import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { rootReducer } from "../rootStore";
import { paginationAction } from "./pagination/action";
import { isLoadMoreAction, limitAction } from "./paginationLimit/actions";

export const POST_REQUST = 'POST_REQUST'; 
export type Post_Requset = {
  type: typeof POST_REQUST,
}
export const PostRequset: ActionCreator<Post_Requset> = () => ({
  type: POST_REQUST,
})

export const POST_REQUST_SUCCSESS = 'POST_REQUST_SUCCSESS'; 
export type Post_Requset_Succsess = {
  type: typeof POST_REQUST_SUCCSESS,
  data: []
}
export const PostRequsetSuccsess: ActionCreator<Post_Requset_Succsess> = (data) => ({
  type: POST_REQUST_SUCCSESS,
  data
})
export const POST_REQUST_ERROR = 'POST_REQUST_ERROR'; 
export type Post_Requset_Error = {
  type: typeof POST_REQUST_ERROR,
  error: string
}
export const PostRequsetError: ActionCreator<Post_Requset_Error> = (error) => ({
  type: POST_REQUST_ERROR,
  error
});

export const postAsyncRequst = (): ThunkAction<void, rootReducer, unknown, Action<string>> => (dispath, getState) => {
  if (getState().post.error !== '') {
    dispath(PostRequsetError(''));
  }
  if(getState().pagination !== 'end' && getState().paginationLimit.isLoadMore) {
    dispath(PostRequset())
    axios.get(
      `https://oauth.reddit.com/new.json?sr_detail=true&after=${getState().pagination}&limit=10`, {
        headers: {Authorization: `bearer ${getState().token.token}`}
      },
    ).then((res) => {
      console.log('res.data.data.after: ', res.data.data.after); 
      if(getState().pagination !== res.data.data.after && res.data.data.after !== null) {
          dispath(PostRequsetSuccsess(res.data.data.children));
          dispath(paginationAction(res.data.data.after));
          if (getState().paginationLimit.limit === 0) {
            dispath(limitAction(3))
            dispath(isLoadMoreAction(false));
          } else if (getState().paginationLimit.limit !== 0) {
            dispath(limitAction(getState().paginationLimit.limit - 1));
          }
      } else if(getState().pagination !== '' && res.data.data.after === null) {
        dispath(PostRequsetSuccsess(res.data.data.children));
        dispath(paginationAction('end'));
        dispath(limitAction(3));
      }
    }).catch((error) => {
      console.log(error)
      dispath(PostRequsetError(String(error)));
    });
  }
}
