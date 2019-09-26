import * as Settings from './settings';

type Row = [number, number][];

export class Board {
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;
  private ctx: CanvasRenderingContext2D;
  private cellWidth: number;
  private cellHeight: number;
  grid: Row[];

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.cellWidth = this.canvasWidth / Settings.board.dimX;
    this.cellHeight = this.canvasHeight / Settings.board.dimX;

  }

  draw() {
    this.ctx.fillStyle = "black";
    for (let row = 1; row < Settings.board.dimX - 1; row++) {
      let _row = [];
      for (let col = 1; col < Settings.board.dimY - 1; col++) {
        _row.push([row, col])
        this.ctx.fillRect(
          row * this.cellWidth, 
          col * this.cellHeight, 
          this.cellWidth - 3, 
          this.cellHeight - 3
        );
      }
      this.grid.push(_row);
    }
  }
}