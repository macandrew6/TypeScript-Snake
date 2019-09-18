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

    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
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
    console.log('changing direction')
    const LEFT_KEY = 37; 
    const RIGHT_KEY = 39; 
    const UP_KEY = 38; 
    const DOWN_KEY = 40;
    const keyPressed = e.keyCode; 
    const goingUp = this.y === -10; 
    const goingDown = this.y === 10; 
    const goingRight = this.x === 10; 
    const goingLeft = this.x === -10;
    if (keyPressed === LEFT_KEY && !goingRight) { 
      console.log('going left')
      this.x--; this.y = 0; 
      // this.draw();
    }
    if (keyPressed === UP_KEY && !goingDown) { 
      console.log('going up')
      this.x = 0; this.y++; 
      // this.draw();
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) { 
      console.log('going right')
      this.x++; this.y = 0; 
      // this.draw();
    }
    if (keyPressed === DOWN_KEY && !goingUp) { 
      console.log('going down')
      this.x = 0; this.y--; 
      // this.draw();
    }
  }

  update() {
    this.updateFrame ++;
    if (this.updateFrame % 10 === 0) {
      this.x++;
      // if (this.x > Settings.board.dimX) this.x = 0;
      return (e: KeyboardEvent) => {
        this.changeDirection(e);
      }
    }
  }
}