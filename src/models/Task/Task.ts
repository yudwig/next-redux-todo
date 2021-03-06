import { Id } from "./Id";
import { Status } from "./Status";
import { Title } from "./Title";

export class Task {
  private id: Id;

  private title: Title;

  private status: Status;

  private archived: boolean;

  private createdAt: Date;

  constructor(props: {
    id: Id;
    title: Title;
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
    return this.id.getValue();
  }

  public getTitle(): string {
    return this.title.getValue();
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
    this.title = new Title(title);
  }

  public getCreatedTimestamp(): number {
    return this.createdAt.getTime();
  }

  public serialize() {
    return {
      id: this.getId(),
      title: this.getTitle(),
      status: this.status.getValue(),
      archived: this.archived,
      createdAt: this.createdAt.getTime(),
    };
  }
}

export default Task;
