import { Factory } from "./Factory";

const getTaskList = () => {
  return [
    Factory.create({
      id: "abcdefghijkLMNOPQRST1",
      title: "task 1",
      status: 0,
    }),
    Factory.create({
      id: "abcdefghijkLMNOPQRST2",
      title: "task 2",
      status: 1,
    }),
    Factory.create({
      id: "abcdefghijkLMNOPQRST3",
      title: "task 3",
      status: 0,
    }),
    Factory.create({
      id: "abcdefghijkLMNOPQRST4",
      title: "task 4",
      status: 0,
      archived: true,
    }),
    Factory.create({
      id: "abcdefghijkLMNOPQRST5",
      title: "task 5",
      status: 1,
      archived: true,
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
