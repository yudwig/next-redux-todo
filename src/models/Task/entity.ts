import { nanoid } from "nanoid";

class Task {
  readonly id: string;

  readonly title: string;

  private status: number;

  readonly createdAt: Date;

  constructor(props: {
    id?: string;
    title: string;
    status?: number;
    createdAt?: Date;
  }) {
    this.id = props.id ? props.id : nanoid();
    this.title = props.title;
    this.status = props.status !== undefined ? props.status : 0;
    this.createdAt = props.createdAt ? props.createdAt : new Date();
  }

  public isCompleted() {
    return this.status === 1;
  }

  public complete() {
    this.status = 1;
  }
}

export default Task;
