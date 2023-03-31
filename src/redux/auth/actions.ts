import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { rootReducer } from "../rootStore";

export const SET_TOKEN = 'SET_TOKEN';
export type tokenAction = {
  type: typeof SET_TOKEN,
  token: string
}
export const setToken: ActionCreator<tokenAction> = (token: string) => ({
  type: SET_TOKEN,
  token
});

export const setTokenThunk = (): ThunkAction<void, rootReducer, unknown, Action<string>> => (dispath) => {
  if (window.__token__ !== "undefined" && window.localStorage.getItem('token') === "undefined") {
    dispath(setToken(window.__token__));
    window.localStorage.setItem('token', window.__token__);
  }else if (window.__token__ !== "undefined" && window.__token__ !== window.localStorage.getItem('token')) {
    window.localStorage.setItem('token', window.__token__);
    dispath(setToken(window.localStorage.getItem('token'))); 
  } else if(window.localStorage.getItem('token') !== "undefined") {
    dispath(setToken(window.localStorage.getItem('token'))); 
  }  else {
    dispath(setToken(window.__token__));
  }
  
}