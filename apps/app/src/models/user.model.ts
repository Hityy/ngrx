export class User {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    private _password: string = '',
    private _type: UserType = 'user'
  ) {}

  get type() {
    return this._type;
  }
  set type(argType) {
    this._type = argType;
  }
}

export type UserType = 'user' | 'admin';
