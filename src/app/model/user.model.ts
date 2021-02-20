export class User {
  constructor(
    public name: string = '',
    public coins: number = 0,
    public moves: any = [],
    public _id?: string
  ) {}
  setId?() {
    this._id = makeId();
  }
}

function makeId(length = 6) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
