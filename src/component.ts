export class Component {
  public name: string;
  public data: { [key: string]: any };

  constructor(name: string, data: { [key: string]: any }) {
    this.name = name;
    this.data = data;
  }
}
