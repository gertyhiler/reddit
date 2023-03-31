import { applyMiddleware, legacy_createStore as createStore, Reducer } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'
import { SET_TOKEN, tokenAction } from "./auth/actions"
import { tokenReduser, tokenState } from "./auth/reduser"
import { MeRequest, MeRequestError, MeRequestSuccsess, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCSESS } from "./me/actions"
import { meReduser, MeState } from "./me/reduser"
import { Post_Requset, Post_Requset_Error, Post_Requset_Succsess, POST_REQUST, POST_REQUST_ERROR, POST_REQUST_SUCCSESS } from "./posts/actions"
import { PAGINATION, PaginationAction, PaginationState } from "./posts/pagination/action"
import { IS_LOAD_MORE, LIMIT, PaginationLimitAction, PaginationLimitState } from "./posts/paginationLimit/actions"
import { paginationReduser } from "./posts/paginationLimit/reduser"
import { PostReduser, PostState } from "./posts/reduser"

export type rootReducer = {
  token: tokenState,
  me: MeState,
  post: PostState,
  pagination: PaginationState, 
  paginationLimit: PaginationLimitState,
}

const initialState: rootReducer = {
  token: {
    token: ''
  },
  me: {
    loading: false,
    error: '',
    data: {},
  },
  post: {
    loading: false, 
    error: '',
    data: []
  },
  pagination: '', 
  paginationLimit: {
    isLoadMore: true,
    limit: 3
  }
}

type MyAction = 
MeRequest | 
MeRequestSuccsess | 
MeRequestError | 
tokenAction |
Post_Requset | 
Post_Requset_Succsess |
Post_Requset_Error |
PaginationAction | 
PaginationLimitAction;

const rootReducer: Reducer<rootReducer, MyAction> = (state = initialState, action) => {
  switch(action.type) {
    case POST_REQUST:
    case POST_REQUST_SUCCSESS:
    case POST_REQUST_ERROR:
    return {
      ...state,
      post: PostReduser(state.post, action)
    }

    case PAGINATION: 
      return {
        ...state, 
        pagination: action.listing
      }
    
    case LIMIT:
    case IS_LOAD_MORE: 
      return {
        ...state, 
        paginationLimit: paginationReduser(state.paginationLimit, action)
      }
    
    case ME_REQUEST:
    case ME_REQUEST_SUCCSESS: 
    case ME_REQUEST_ERROR: 
    return {
      ...state,
      me: meReduser(state.me, action)
    }

    case SET_TOKEN: 
    return {
      ...state,
      token: tokenReduser(state.token, action)
    }
    default: 
    return state
  }
  
}

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));