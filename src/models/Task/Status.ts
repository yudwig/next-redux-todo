export class Status {
  readonly val: number;

  static READY = 0;

  static COMPLETED = 1;

  constructor(status?: number) {
    this.val = status || Status.READY;
  }

  public isCompleted(): boolean {
    return this.val === Status.COMPLETED;
  }

  public getValue(): number {
    return this.val;
  }
}

export default {
  Status,
};
