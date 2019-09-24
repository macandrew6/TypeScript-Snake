import * as Settings from './settings';

export class Board {
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;
  private ctx: CanvasRenderingContext2D;
  private cellWidth: number;
  private cellHeight: number;

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.cellWidth = this.canvasWidth / Settings.board.dimX
    this.cellHeight = this.canvasHeight / Settings.board.dimX
  }

  generateAppleCoord() {
    // pick a random coordinate [dimX, dimY]
    // place an apple 
    // returns coordinate
  }

  draw() {
    this.ctx.fillStyle = "black";
    for (let row = 0; row < Settings.board.dimX; row++) {
      for (let col = 0; col < Settings.board.dimY; col++) {
        this.ctx.fillRect(
          row * this.cellWidth, 
          col * this.cellHeight, 
          this.cellWidth - 3, 
          this.cellHeight - 3
        );
      }
    }
  }
}