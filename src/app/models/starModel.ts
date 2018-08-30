import { User } from './userModel';

export interface Star {
  readonly id: string;
  readonly name: String;
  readonly details: String;
  readonly creator: User;
  readonly creationDate: Date;
  readonly editedDate: Date;
}
