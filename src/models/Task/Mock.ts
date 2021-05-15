import { Factory } from "./Factory";

const getTaskList = () => {
  return [
    Factory.create({ title: "task 1", status: 0 }),
    Factory.create({ title: "task 2", status: 1 }),
    Factory.create({ title: "task 3", status: 0 }),
  ];
};

const getSerializedTaskList = () => {
  const tasks = getTaskList();
  return tasks.map((task) => task.serialize());
};

export default {
  getTaskList,
  getSerializedTaskList,
};
