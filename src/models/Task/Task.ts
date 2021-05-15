import { Id } from "./Id";
import { Status } from "./Status";

export class Task {
  private id: Id;

  readonly title: string;

  private status: Status;

  private createdAt: Date;

  constructor(props: {
    id: Id;
    title: string;
    status: Status;
    createdAt: Date;
  }) {
    this.id = props.id;
    this.title = props.title;
    this.status = props.status;
    this.createdAt = props.createdAt;
  }

  public getId(): string {
    return this.id.val;
  }

  public isCompleted(): boolean {
    return this.status.isCompleted();
  }

  public complete(): void {
    this.status = new Status(Status.COMPLETED);
  }

  public serialize() {
    return {
      id: this.id.val.toString(),
      title: this.title.toString(),
      status: this.status.toString(),
      createdAt: this.createdAt.getTime().toString(),
    };
  }
}

export default Task;
