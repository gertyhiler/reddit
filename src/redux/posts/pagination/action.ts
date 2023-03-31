import { ActionCreator } from "redux";

export const PAGINATION = 'PAGINATION';
export type PaginationAction = {
  type: typeof PAGINATION,
  listing: string
}

export const paginationAction: ActionCreator<PaginationAction> = (listing) => ({
  type: PAGINATION, 
  listing
}); 

export type PaginationState = string