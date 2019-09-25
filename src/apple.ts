import * as Settings from './settings';

export class Apple {
  private cellWidth: number;
  private cellHeight: number;
  
  constructor (public x: number, public y: number, canvas: HTMLCanvasElement) {
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    this.cellWidth = canvasWidth / Settings.board.dimX
    this.cellHeight = canvasHeight / Settings.board.dimX
    // this.x = 5;
    // this.y = 9;
  }

  private generateRandomCoor() {

  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'green';
    ctx.fillRect(
      this.x * this.cellWidth + 8,
      this.y * this.cellHeight + 8,
      30,
      30
    )
  };

  private move() {
    // picks a random place on the board to put apple
  }
}