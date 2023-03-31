import { Reducer } from "redux";
import { IS_LOAD_MORE, LIMIT, PaginationLimitAction, PaginationLimitState } from "./actions";

export const paginationReduser: Reducer<PaginationLimitState,PaginationLimitAction> = (state = {
  isLoadMore: true,
  limit: 3}, action) => {
  switch (action.type) {
    case LIMIT: 
      return {
        ...state, 
        limit: action.limit
      }
    case IS_LOAD_MORE: 
      return {
        ...state, 
        isLoadMore: action.isLoadMore
      }
    default: 
      return state
  }
}