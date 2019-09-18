import * as Settings from './settings';

export class Snake {
  private ctx: CanvasRenderingContext2D;
  private updateFrame: number = 0;
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;
  private cellWidth: number;
  private cellHeight: number;
  private x: number;
  private y: number;

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");

    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.cellWidth = this.canvasWidth / Settings.board.dimX
    this.cellHeight = this.canvasHeight / Settings.board.dimX

    this.x = 0;
    this.y = 0;

    document.addEventListener("keydown", this.changeDirection);
  }

  draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(
      this.x * this.cellWidth, 
      this.y * this.cellHeight, 
      30, 
      30
    );
  }

  changeDirection(e: KeyboardEvent) {
    const LEFT_KEY = 37; 
    const RIGHT_KEY = 39; 
    const UP_KEY = 38; 
    const DOWN_KEY = 40;
    const keyPressed = e.keyCode; 
    const goingUp = this.y === -10; 
    const goingDown = this.y === 10; 
    const goingRight = this.x === 10; 
    const goingLeft = this.x === -10;
    if (keyPressed === LEFT_KEY && !goingRight) { this.x = -10; this.y = 0; }
    if (keyPressed === UP_KEY && !goingDown) { this.x = 0; this.y = -10; }
    if (keyPressed === RIGHT_KEY && !goingLeft) { this.x = 10; this.y = 0; }
    if (keyPressed === DOWN_KEY && !goingUp) { this.x = 0; this.y = 10; }
  }

  update() {
    this.updateFrame ++;
    if (this.updateFrame % 10 === 0) {
      this.x++;
      if (this.x > Settings.board.dimX) this.x = 0;
    }
  }
}