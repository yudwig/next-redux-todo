import { createSelector } from "reselect";
import { Factory } from "../../models/Task/Factory";
import Task from "../../models/Task/Task";

interface ViewObject {
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

const tasksSelector = (state: any) =>
  state.tasks.map((task: any) => createViewObject(Factory.create(task)));

const getInboxTasks = createSelector([tasksSelector], (vos): [ViewObject] =>
  vos.filter((vo: ViewObject) => !vo.entity.isArchived())
);

export default {
  getInboxTasks,
};
