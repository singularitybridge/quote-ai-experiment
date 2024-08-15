import { Instance, applySnapshot, flow, types } from "mobx-state-tree";
import { Project } from "./Project";


const RootStore = types.model("RootStore", {
  projects: types.array(Project)
}).actions((self) => ({
  loadProjects: flow(function* () {
   
  }),
  // ... other actions
}));

// export type { IRootStore } from Instance<typeof RootStore>;
export interface IRootStore extends Instance<typeof RootStore> {}
export { RootStore };







