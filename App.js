import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Root from "./components/Root";

export default App = () => {
  return (
    <Provider store={store}>
      <Root></Root>
    </Provider>
  );
};
