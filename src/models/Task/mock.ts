import Task from "./entity";

const getTaskList = () => {
  return [
    new Task({ createdAt: new Date(), status: 0, title: "task 1" }),
    new Task({ createdAt: new Date(), status: 1, title: "task 2" }),
    new Task({ createdAt: new Date(), status: 0, title: "task 3" }),
  ];
};

export default {
  getTaskList,
};
