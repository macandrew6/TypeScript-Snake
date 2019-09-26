import * as Settings from './settings';

type Coord = [number, number];
type Row = Coord[];

export class Board {
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;
  private ctx: CanvasRenderingContext2D;
  private cellWidth: number;
  private cellHeight: number;
  validSpots: string[] = [];
  grid: Row[] = [];

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.cellWidth = this.canvasWidth / Settings.board.dimX;
    this.cellHeight = this.canvasHeight / Settings.board.dimX;

    this.createPossibleSpotList();
  }

  createPossibleSpotList() {
    for (let row = 1; row < Settings.board.dimX - 1; row++) {
      for (let col = 1; col < Settings.board.dimY - 1; col++) { 
        this.validSpots.push(`${col},${row}`)
      }
    }
  }

  draw() {
    this.ctx.fillStyle = "black";
    for (let row = 1; row < Settings.board.dimX - 1; row++) {
      for (let col = 1; col < Settings.board.dimY - 1; col++) {
        this.ctx.fillRect(
          row * this.cellWidth, 
          col * this.cellHeight, 
          this.cellWidth - 1, 
          this.cellHeight - 1
        );
      }
    }
  }
}