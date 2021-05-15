import { nanoid } from "nanoid";
import Task from "./Task";
import { Id } from "./Id";
import { Status } from "./Status";

export interface Input {
  id?: string;
  title: string;
  status?: string;
  timestamp?: string;
}

export class Factory {
  public static create(props: Input): Task {
    return new Task({
      id: new Id(props.id ? props.id : nanoid()),
      title: props.title,
      status: new Status(
        props.status !== undefined ? parseInt(props.status, 10) : Status.READY
      ),
      createdAt: props.timestamp
        ? new Date(parseInt(props.timestamp, 10))
        : new Date(),
    });
  }
}
