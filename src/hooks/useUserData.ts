import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  meRequestAsync } from "../redux/me/actions";
import { rootReducer } from "../redux/rootStore";



export interface IUserData {
  name?: string
  iconImg?: string
}

export function useUserData() {
  const data = useSelector<rootReducer, IUserData> (state => state.me.data); 
  const loading = useSelector<rootReducer, boolean> (state => state.me.loading);
  const token = useSelector<rootReducer> (state => state.token.token);
  
  const dispath = useDispatch();

  useEffect(() => {
    if (token !== "" && token !== 'undefined') {
      dispath(meRequestAsync());
    }
  }, [token])

  return {
    data,
    loading
  }
}