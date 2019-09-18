import { Board } from './board';
import { Snake } from './snake';

export class Game {
  public canvas: HTMLCanvasElement;
  private requestedFrameId: number = -1;
  private loopCount = 0;
  private ctx: CanvasRenderingContext2D;
  private board: Board;
  private snake: Snake;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.board = new Board(canvas);
    this.snake = new Snake(canvas);
  }

  private loop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.board.draw();
    this.snake.draw();
    this.snake.update();
    console.log('looping')
    console.log(++this.loopCount);
  }

  startLoop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
  }

  endLoop() {
    cancelAnimationFrame(this.requestedFrameId);
  }
}
