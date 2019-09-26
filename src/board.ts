import * as Settings from './settings';

type Coord = [number, number];
type Row = Coord[];

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

    this.draw = this.draw.bind(this);
  }

  draw() {
    this.ctx.fillStyle = "black";
    for (let row = 1; row < Settings.board.dimX - 1; row++) {
      let _row: Row = [];
      for (let col = 1; col < Settings.board.dimY - 1; col++) {
        console.log([row, col])
        console.log(_row);
        let coord: Coord = [row, col];
        this.ctx.fillRect(
          row * this.cellWidth, 
          col * this.cellHeight, 
          this.cellWidth - 1, 
          this.cellHeight - 1
        );
        if (coord !== undefined) {
          _row.push(coord);
        }
      }
      this.grid.push(_row);
      // why doesnt this work?
    }
    console.log(this.grid);
  }
}