import { Board } from './board';
import { Snake } from './snake';
import { Apple } from './apple';
import * as Settings from './settings';

export class Game {
  public canvas: HTMLCanvasElement;
  private requestedFrameId: number = -1;
  private ctx: CanvasRenderingContext2D;
  private board: Board;
  private snake: Snake;
  private apple: Apple;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.board = new Board(canvas);
    this.snake = new Snake(canvas);
    this.apple = new Apple(6, 5, canvas);
  }

  private loop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.board.draw();
    if (this.snakeIsEatingApple()) {
      this.snake.grow();
      // this.apple.move();
      this.apple.x++;
      if (this.apple.x > 19) this.apple.x = 1;
    }
    if (this.snakeIsDead()) {
      this.endLoop();
    }
    this.snake.draw();
    this.snake.update();
    this.apple.draw(this.ctx);
  }

  private generateAppleCoord() {
    let emptyCoord = new Set();
    // for (let i = 1)
  }

  private snakeIsEatingApple() {
    return (
      this.apple.x === this.snake.x &&
      this.apple.y === this.snake.y 
    )
  }

  private snakeIsDead() {
    if (this.snake.x > Settings.board.dimX - 2) return true;
    if (this.snake.y > Settings.board.dimY - 2) return true;
    if (this.snake.x < 1) return true;
    if (this.snake.y < 1) return true;
  }

  startLoop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
  }

  endLoop() {
    cancelAnimationFrame(this.requestedFrameId);
  }
}
