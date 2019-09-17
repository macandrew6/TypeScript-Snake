import Square from './square';

export default class Board {
  constructor() {
    this.buildGrid();
  }

  buildGrid() {
    for (let row = 0; row < 12; row++) {
      for (let col = 0; col < 12; col++) {
        new Square(row, col);
      }
    }
  }
}