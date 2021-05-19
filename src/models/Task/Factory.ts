import { nanoid } from "nanoid";
import Task from "./Task";
import { Id } from "./Id";
import { Status } from "./Status";

export interface Input {
  id?: string;
  title: string;
  status?: number;
  archived?: boolean;
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
      archived: props.archived !== undefined ? props.archived : false,
      createdAt: props.createdAt
        ? new Date(parseInt(props.createdAt, 10))
        : new Date(),
    });
  }
}
