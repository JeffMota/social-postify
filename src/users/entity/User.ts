import { randomUUID } from 'crypto';

export class User {
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
    private _avatar: string,
    private readonly id: string = randomUUID(),
  ) {}

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set email(email: string) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set password(password: string) {
    this._password = password;
  }

  get password() {
    return this._password;
  }

  get avatar(): string {
    return this._avatar;
  }
  set avatar(avatar: string) {
    this._avatar = avatar;
  }
}
