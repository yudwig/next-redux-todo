import { Factory } from "./Factory";

const getTaskList = () => {
  return [
    Factory.create({
      id: "abcdefghijkLMNOPQRST1",
      title: "task 1",
      status: "0",
    }),
    Factory.create({
      id: "abcdefghijkLMNOPQRST2",
      title: "task 2",
      status: "1",
    }),
    Factory.create({
      id: "abcdefghijkLMNOPQRST3",
      title: "task 3",
      status: "0",
    }),
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
