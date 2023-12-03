import { profession } from "./profession.model";

export class Student {
  public id?: number;
  public firstName?: string;
  public lastName?: string;
  public address?: string;
  public phone?: string;
  public status?: boolean;
  public avgMark?: number;
  public profession?: profession;
  public year?: years;

  constructor(
    id?: number,
    firstName?: string,
    lastName?: string,
    address?: string,
    phone?: string,
    status?: boolean,
    avgMark?: number,
    profession?: profession,
    year?: years
  ) { }
}

export enum years {
  "first" = 1,
  "second",
  "third"
}