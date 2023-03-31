import { ActionCreator } from "redux";

export const IS_LOAD_MORE = 'IS_LOAD_MORE';
export type IsLoadMoreAction = {
  type: typeof IS_LOAD_MORE,
  isLoadMore: boolean
}
export const isLoadMoreAction: ActionCreator<IsLoadMoreAction> = (isLoadMore) => ({
  type: IS_LOAD_MORE,
  isLoadMore
})

export const LIMIT = 'LIMIT';
export type LimitAction = {
  type: typeof LIMIT,
  limit: number
}
export const limitAction: ActionCreator<LimitAction> = (limit) => ({
  type: LIMIT,
  limit
});

export type PaginationLimitAction = LimitAction | IsLoadMoreAction; 
export type PaginationLimitState = {
  isLoadMore: boolean, 
  limit: number
}