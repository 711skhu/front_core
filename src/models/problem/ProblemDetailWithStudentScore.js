import Problem from "@/models/problem/Problem";

export default class ProblemDetailWithStudentScore extends Problem {
  constructor(id, title, score, maxScore) {
    super(id, title, maxScore);
    this.score = score;
  }
}
