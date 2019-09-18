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

  changeDirection(event) {
    const LEFT_KEY = 37; const RIGHT_KEY = 39; const UP_KEY = 38; const DOWN_KEY = 40;
    const keyPressed = event.keyCode; 
    const goingUp = dy === -10; 
    const goingDown = dy === 10; 
    const goingRight = dx === 10; 
    const goingLeft = dx === -10;
    if (keyPressed === LEFT_KEY && !goingRight) { dx = -10; dy = 0; }
    if (keyPressed === UP_KEY && !goingDown) { dx = 0; dy = -10; }
    if (keyPressed === RIGHT_KEY && !goingLeft) { dx = 10; dy = 0; }
    if (keyPressed === DOWN_KEY && !goingDown) { dx = 0; dy = 10; }
  }

  update() {
    this.updateFrame ++;
    if (this.updateFrame % 10 === 0) {
      this.x++;
      if (this.x > Settings.board.dimX) this.x = 0;
    }
  }
}