import { Reducer } from "react";
import { IUserData } from "../../hooks/useUserData";
import { MeRequest, MeRequestError, MeRequestSuccsess, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCSESS } from "./actions";

export type MeState = {
  loading: boolean
  error: string
  data: IUserData
}

type MeAction = MeRequest | 
MeRequestSuccsess | 
MeRequestError;

export const meReduser: Reducer<MeState, MeAction> = (state, action) => {
  switch (action.type) {
    case ME_REQUEST: 
    return {
      ...state, 
      loading: true,
    }
    case ME_REQUEST_SUCCSESS:
    return {
      ...state,
      data: action.data,
      loading: false,
    }
    case ME_REQUEST_ERROR:
    return {
      ...state,
      error: action.error,
      loading: false,
    }
    default: 
    return state;
  }
}