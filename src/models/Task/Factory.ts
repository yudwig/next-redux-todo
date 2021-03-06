import { nanoid } from "nanoid";
import Task from "./Task";
import { Id } from "./Id";
import { Status } from "./Status";
import { Title } from "./Title";

export interface Input {
  id?: string;
  title: string;
  status?: number;
  archived?: boolean;
  createdAt?: number;
}

export class Factory {
  public static create(props: Input): Task {
    return new Task({
      id: new Id(props.id ? props.id : nanoid()),
      title: new Title(props.title),
      status: new Status(
        props.status !== undefined ? props.status : Status.READY
      ),
      archived: props.archived !== undefined ? props.archived : false,
      createdAt: props.createdAt ? new Date(props.createdAt) : new Date(),
    });
  }
}
