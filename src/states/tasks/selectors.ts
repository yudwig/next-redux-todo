import { createSelector } from "reselect";
import { Factory } from "../../models/Task/Factory";
import Task from "../../models/Task/Task";

export interface ViewObject {
  entity: Task;
  props: {
    id: string;
    title: string;
    isCompleted: boolean;
  };
}

const createViewObject = (task: Task) => ({
  entity: task,
  props: {
    id: task.getId(),
    title: task.getTitle(),
    isCompleted: task.isCompleted(),
  },
});

const tasksSelector = (state: any) => {
  const tasks = state.tasks.map((task: any) =>
    createViewObject(Factory.create(task))
  );
  tasks.sort((a: ViewObject, b: ViewObject) =>
    a.entity.getCreatedTimestamp() < b.entity.getCreatedTimestamp() ? 1 : -1
  );
  return tasks;
};

const getInboxTasks = createSelector([tasksSelector], (vos): [ViewObject] =>
  vos.filter((vo: ViewObject) => !vo.entity.isArchived())
);

const getArchivedTasks = createSelector([tasksSelector], (vos): [ViewObject] =>
  vos.filter((vo: ViewObject) => vo.entity.isArchived())
);

export default {
  getInboxTasks,
  getArchivedTasks,
};
