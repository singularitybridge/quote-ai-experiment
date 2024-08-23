import React from "react";
import { Outlet } from "react-router-dom";
import { RootStore } from "./store/models/RootStore";
import { RootStoreProvider } from "./store/commom/RootStoreContext";

const rootStore = RootStore.create({});

const App = () => {
  return (
    <RootStoreProvider value={rootStore}>
      <div className="flex flex-col h-screen inset-0 p-4">
        <Outlet />
      </div>
    </RootStoreProvider>
  );
};

export default App;
