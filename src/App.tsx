import React, { useEffect, useState } from "react";
import "./main.global.css";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useDispatch } from "react-redux";
import { setTokenThunk } from "./redux/auth/actions";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { PostModal } from "./shared/CardsList/Card/TextContent/PostModal";
import { PageNotFound } from "./shared/PageNotFound";

type token = string;

export type tokenAction = {
  type: "setToken";
  token: token;
};
export function AppComponent() {
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTokenThunk());
    setMounted(true);
  }, []);
  
  return (
    <>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Header />
            <Content>
            <Switch>
              <Route path="/posts">
                <CardsList />
              </Route>
              <Route path="*">
                <PageNotFound/>
              </Route>
              </Switch>
            </Content>
          </Layout>

          <Switch>
            <Route exact path="/">
              <Redirect to="/posts" />
            </Route>
            <Route exact path="/auth">
              <Redirect to="/posts" />
            </Route>
            <Route path="/posts/post/:id">
              <PostModal/>
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}
