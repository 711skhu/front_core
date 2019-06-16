export default class Problem {
  constructor(id, title, maxScore) {
    this.id = id || 0;
    this.title = title || '';
    this.maxScore = maxScore || 0;
  }
}
