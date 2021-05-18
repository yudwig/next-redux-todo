import { Id } from "./Id";
import { Status } from "./Status";

export class Task {
  private id: Id;

  private title: string;

  private status: Status;

  private archived: boolean;

  private createdAt: Date;

  constructor(props: {
    id: Id;
    title: string;
    status: Status;
    archived: boolean;
    createdAt: Date;
  }) {
    this.id = props.id;
    this.title = props.title;
    this.status = props.status;
    this.archived = props.archived;
    this.createdAt = props.createdAt;
  }

  public getId(): string {
    return this.id.val;
  }

  public getTitle(): string {
    return this.title;
  }

  public isCompleted(): boolean {
    return this.status.isCompleted();
  }

  public isArchived(): boolean {
    return this.archived;
  }

  public complete(): void {
    this.status = new Status(Status.COMPLETED);
  }

  public incomplete(): void {
    this.status = new Status(Status.READY);
  }

  public toggleStatus(): void {
    if (this.isCompleted()) {
      this.incomplete();
    } else {
      this.complete();
    }
  }

  public archive(): void {
    this.archived = true;
  }

  public changeTitle(title: string): void {
    this.title = title;
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
