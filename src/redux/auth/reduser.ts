import { Reducer } from "react";
import { SET_TOKEN, tokenAction,  } from "./actions";

export type tokenState = {
  token: string
}

export const tokenReduser: Reducer<tokenState, tokenAction> = (state, action) => {
  switch (action.type) {
    case SET_TOKEN: 
    return {
      ...state, 
     token: action.token
    }
    default: 
    return state;
  }
}