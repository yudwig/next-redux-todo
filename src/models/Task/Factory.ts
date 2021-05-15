import { nanoid } from "nanoid";
import Task from "./Task";
import { Id } from "./Id";
import { Status } from "./Status";

export interface Input {
  id?: string;
  title: string;
  status?: number;
  createdAt?: string;
}

export class Factory {
  public static create(props: Input): Task {
    return new Task({
      id: new Id(props.id ? props.id : nanoid()),
      title: props.title,
      status: new Status(
        props.status !== undefined ? props.status : Status.READY
      ),
      createdAt: new Date(props.createdAt ? props.createdAt : ""),
    });
  }
}

export default {
  Factory,
};
