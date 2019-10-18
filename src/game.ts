import { Board } from './board';
import { Snake } from './snake';
import { Apple } from './apple';
import { ScoreBoard } from './scoreBoard';
import * as Settings from './settings';

export class Game {
  public canvas: HTMLCanvasElement;
  private requestedFrameId: number = -1;
  private ctx: CanvasRenderingContext2D;
  private board: Board;
  private snake: Snake;
  private apple: Apple;
  private scoreBoard: ScoreBoard; 
  private scoreBoardDiv: HTMLElement; 

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.board = new Board(canvas);
    this.snake = new Snake(canvas);
    this.apple = new Apple(6, 5, canvas);
    this.scoreBoard = new ScoreBoard(Settings.game.pointPerApple);
    this.scoreBoardDiv = document.getElementById('score');
  }

  private loop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.snakeIsEatingApple()) {
      this.snake.grow();
      const appleCoord = this.generateAppleCoord();
      this.apple = new Apple(appleCoord[0], appleCoord[1], this.canvas);
      this.scoreBoard.increaseScore();
      this.scoreBoardDiv.innerHTML = this.scoreBoard.score.toString();
    }
    if (this.snakeIsDead()) {
      this.endLoop();
    }
    this.board.draw();
    this.snake.draw();
    this.snake.update();
    this.apple.draw(this.ctx);
  }

  private generateAppleCoord() {
    const currentSnakeSet = this.snake.currentSnakeSet();
    const openSpots = this.board.validSpots.filter(spot => {
      return !currentSnakeSet[spot];
    })
    const randomIdx = Math.floor(Math.random() * openSpots.length)
    const appleX = parseInt(openSpots[randomIdx].split(',')[0]);
    const appleY = parseInt(openSpots[randomIdx].split(',')[1]);
    return [appleX, appleY];
  }

  private snakeIsEatingApple() {
    return (
      this.apple.x === this.snake.x &&
      this.apple.y === this.snake.y 
    )
  }

  private snakeIsDead() {
    // refactor using a set!
    let tempSnakeBody = this.snake.snakeBody.map(node => {
      return `${node[0]},${node[1]}`;
    });  

    tempSnakeBody.shift();
    if (tempSnakeBody.includes(`${this.snake.x},${this.snake.y}`)) return true;
    // make border button so when user clicks it activates these settings
    if (this.snake.x > Settings.board.dimX - 2) return true;
    if (this.snake.y > Settings.board.dimY - 2) return true;
    if (this.snake.x < 1) return true;
    if (this.snake.y < 1) return true;
    // let scoreBoard = document.getElementById('score-board');
    // scoreBoard.classList.add('full-screen')
  }

  startLoop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
  }

  endLoop() {
    cancelAnimationFrame(this.requestedFrameId);
  }
}
