import {
  flow,
  types,
  Instance,
  SnapshotIn,
  SnapshotOut,
} from "mobx-state-tree";
import { applySnapshot } from "mobx-state-tree";

const Task = types.model("Task", {
  _id: types.identifier,
  taskName: types.string,
  taskDescription: types.optional(types.string, ""),
  startDate: types.optional(types.string, ""),
  endDate: types.optional(types.string, ""),
});

const Note = types.model("Note", {
  _id: types.identifier,
  noteTitle: types.string,
  noteContent: types.string,
  dateCreated: types.string,
});

const Project = types
  .model("Project", {
    _id: types.identifier,
    key: types.string,
    name: types.string,
    description: types.string,
    namespace: types.string,
    tasks: types.array(Task),
    notes: types.array(Note),
  })
  .actions((self) => ({
    load: flow(function* load(projectKey) {
      const response = yield window.fetch(
        `http://127.0.0.1:5000/projects/${projectKey}`
      );
      const projectData = yield response.json();
      applySnapshot(self, projectData);
    }),
    removeTask(taskId: string) {
      const taskToRemove = self.tasks.find(task => task._id === taskId);
      if (taskToRemove) {
        self.tasks.remove(taskToRemove);
      }
    },
    


    // ... other actions
  }));

type IProject = Instance<typeof Project>;
type ITask = Instance<typeof Task>;
type ProjectSnapshotIn = SnapshotIn<typeof Project>;
type ProjectSnapshotOut = SnapshotOut<typeof Project>;

export { Project, Task, Note };
export type { IProject, ProjectSnapshotIn, ProjectSnapshotOut, ITask };
