export class Title {
  readonly val: string;

  constructor(title: string) {
    if (title.length === 0) {
      throw new Error("Title is null or empty.");
    }
    this.val = title;
  }

  public getValue(): string {
    return this.val;
  }
}

export default {
  Title,
};
