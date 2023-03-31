import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IUserData } from "../../hooks/useUserData";
import { rootReducer } from "../rootStore";

export const ME_REQUEST = 'ME_REQUEST';
export type MeRequest = {
  type: typeof ME_REQUEST,
}
export const MeRequest: ActionCreator<MeRequest> = () => ({
  type: ME_REQUEST,
});

export const ME_REQUEST_SUCCSESS = 'ME_REQUEST_SUCCSESS';
export type MeRequestSuccsess = {
  type: typeof ME_REQUEST_SUCCSESS,
  data: IUserData
};
export const MeRequestSuccsess: ActionCreator<MeRequestSuccsess> = (data: IUserData) => ({
  type: ME_REQUEST_SUCCSESS,
  data,
});


export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
export type MeRequestError = {
  type: typeof ME_REQUEST_ERROR,
  error: string
};
export const MeRequestError: ActionCreator<MeRequestError> = (error) => ({
  type: ME_REQUEST_ERROR,
  error,
});

export const meRequestAsync = (): ThunkAction<void, rootReducer, unknown, Action<string>> => (dispath, getState) => {
  dispath(MeRequest());
  axios.get(
    "https://oauth.reddit.com/api/v1/me.json", {
      headers: {Authorization: `bearer ${getState().token.token}`}
    }
  ).then((res) => {
    const {name, snoovatar_img} = res.data;
    dispath(MeRequestSuccsess({name, iconImg: snoovatar_img}));
  }).catch((req) => {
    console.log(req);
    dispath(MeRequestError(String(req)));
  });
}