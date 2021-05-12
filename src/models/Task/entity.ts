import { nanoid } from "nanoid";

class Task {
  readonly id: string;

  readonly title: string;

  readonly status: boolean;

  readonly createdAt: Date;

  constructor(props: {
    id?: string;
    title: string;
    status?: boolean;
    createdAt?: Date;
  }) {
    this.id = props.id ? props.id : nanoid();
    this.title = props.title;
    this.status = props.status !== undefined ? props.status : false;
    this.createdAt = props.createdAt ? props.createdAt : new Date();
  }
}

export default Task;
