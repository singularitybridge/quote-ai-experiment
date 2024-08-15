import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { ContentContainer } from "../components/ContentContainer";
import { useRootStore } from "../store/commom/RootStoreContext";
import { Button } from "../components/core/Button";
import { ProjectViewer } from "../components/ProjectViewer";

const Home = observer(() => {
  const { projects } = useRootStore();
  const handleClick = () => {};

  return (
    <>
      <div className="mb-4">
        <Button onClick={handleClick} label="click" />
      </div>

      <ContentContainer>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tasks
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{project.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {project.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ul>
                    {project.tasks.slice(0, 2).map((task, taskIdx) => (
                      <li key={taskIdx}>
                        <div>
                          <span className="inline-block mb-2 whitespace-nowrap rounded-[0.27rem] bg-slate-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                            {task.taskName}
                          </span>
                          <button
                            className="inline-block ml-2 text-xs text-gray-500 hover:text-gray-700"
                            onClick={() => {
                              project.removeTask(task._id);
                            }}
                          >
                            x
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ul>
                    {project.notes.slice(0, 2).map((note, noteIdx) => (
                      <li key={noteIdx}>
                        {note.noteTitle} ({note.dateCreated})
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContentContainer>

      <ContentContainer>
        <ProjectViewer />
      </ContentContainer>
    </>
  );
});

export { Home };
