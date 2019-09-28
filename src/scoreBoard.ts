export class ScoreBoard {
  score: number = 0;
  constructor(public point: number) {
    this.point = point;
  }

  increaseScore() {
    this.score += this.point;
    return this.score;
  }
}