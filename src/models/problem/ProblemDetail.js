export default class ProblemDetail {
  constructor(id, title, supportedLanguages, content, sequence, testCases) {
    this.id = id || 0;
    this.title = title || '';
    this.supportedLanguages = supportedLanguages || [];
    this.content = content || '';
    this.sequence = sequence || 0;
    this.testCases = testCases || [];
  }
}
