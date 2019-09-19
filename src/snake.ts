import * as Settings from './settings';

export class Snake {
  private ctx: CanvasRenderingContext2D;
  private updateFrame: number = 0;
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;
  private cellWidth: number;
  private cellHeight: number;
  private direction: [number, number];
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
    this.direction = [1, 0];

    this.changeDirection = this.changeDirection.bind(this);
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
    if (keyPressed === LEFT_KEY) { 
      console.log('going left')
      this.direction = [-1, 0];
    }
    if (keyPressed === UP_KEY) { 
      console.log('going up')
      this.direction = [0, -1]; 
    }
    if (keyPressed === RIGHT_KEY) { 
      console.log('going right')
      this.direction = [1, 0]; 
    }
    if (keyPressed === DOWN_KEY) { 
      console.log('going down')
      this.direction = [0, 1]; 
    }
  }

  update() {
    this.updateFrame ++;
    if (this.updateFrame % 10 === 0) {
      this.x += this.direction[0];
      this.y += this.direction[1];
      
      if (this.x > Settings.board.dimX) this.x = 0;
    }
  }
}