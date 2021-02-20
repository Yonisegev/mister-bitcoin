export class Contact {
  constructor(
    public name: string = '',
    public email: string = '',
    public phone: string = '',
    public _id?: string
  ) {}

  setId?() {
    // Implement your own set Id
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
