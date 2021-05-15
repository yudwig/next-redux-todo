import { nanoid } from "nanoid";

export class Id {
  readonly val: string;

  constructor(id?: string) {
    this.val = id || nanoid();
  }

  public toString() {
    return this.val;
  }
}

export default {
  Id,
};
