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

  public archive(): void {
    this.archived = true;
  }

  public unarchive(): void {
    this.archived = false;
  }

  public changeTitle(title: string): void {
    this.title = title;
  }

  public getCreatedTimestamp(): number {
    return this.createdAt.getTime();
  }

  public serialize() {
    return {
      id: this.id.getValue(),
      title: this.title,
      status: this.status.getValue(),
      archived: this.archived,
      createdAt: this.createdAt.getTime(),
    };
  }
}

export default Task;
