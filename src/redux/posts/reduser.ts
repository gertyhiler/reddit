import { Reducer } from "react";
import { Post_Requset, Post_Requset_Error, Post_Requset_Succsess, POST_REQUST, POST_REQUST_ERROR, POST_REQUST_SUCCSESS } from "./actions"

export type PostState = {
  loading: boolean,
  error: string,
  data: Array<any>,
}

type PostAction = Post_Requset 
| Post_Requset_Succsess 
| Post_Requset_Error;

export const PostReduser: Reducer<PostState, PostAction> = (state, action) => {
  switch (action.type) {
    case POST_REQUST: 
      return {
        ...state, 
        loading: true,
      }
    case POST_REQUST_SUCCSESS:
      return {
        ...state,
        loading: false,
        data: state.data.concat(...action.data),
      }
    case POST_REQUST_ERROR: 
      return {
        ...state, 
        loading: false,
        error: action.error
      }
    default: 
    return state
  }
}