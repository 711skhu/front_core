export default class TestCase {
  constructor(id, input, output) {
    this.id = id;
    this.input = input || '';
    this.output = output || '';
  }
}
