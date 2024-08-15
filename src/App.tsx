import React, { useCallback, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { RootStore } from "./store/models/RootStore";
import { RootStoreProvider } from "./store/commom/RootStoreContext";

const rootStore = RootStore.create({
  projects: [],
});

const App = () => {
  useEffect(() => {
    rootStore.loadProjects();
  }, []);

  return (
    <RootStoreProvider value={rootStore}>
      <div className="flex flex-col h-screen inset-0 p-4">
        <Outlet />
      </div>
    </RootStoreProvider>
  );
};

export default App;
