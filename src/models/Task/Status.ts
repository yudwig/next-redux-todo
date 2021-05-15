export class Status {
  readonly val: number;

  static READY = 0;

  static COMPLETED = 1;

  constructor(status?: number) {
    this.val = status || Status.READY;
  }

  public isCompleted() {
    return this.val === Status.COMPLETED;
  }

  public toString() {
    return this.val.toString();
  }
}

export default {
  Status,
};
