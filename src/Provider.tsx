import React from "react";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { AppComponent } from "./App";
import { store } from "./redux/rootStore";

function ProviderComponent () {
  return (
    <Provider store={ store }> 
      <AppComponent/>
    </Provider>
  )
}

export const App = hot(() => <ProviderComponent/>);