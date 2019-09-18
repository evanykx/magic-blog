import {
  randomColor,
  getRandom,
} from './AnimUtils';

export default class Ball {
  private radius: number;
  private startDeg: number;
  private endDeg: number;
  private clockWay: boolean;
  private fillColor: string;
  private borderColor: string;
  private dirX: number;
  private dirY: number;
  private speed: number;
  private X: number;
  private Y: number;
  private width: number;
  private height: number;
  private ctx: any;

  constructor(o: any, ctx: any, width: number, height: number) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.radius = o.radius || (o.MaxRadius || 20) * Math.random();
    this.startDeg = 0;
    this.endDeg = Math.PI * 2;
    this.clockWay = false;
    this.fillColor = o.fillColor || randomColor();
    this.borderColor = 'transparent';
    this.dirX = 1;
    this.dirY = 1;
    this.speed = o.speed || 1 * Math.random() - 0.3;
    this.X = getRandom(width);
    this.Y = getRandom(height);
  }

  public resetDir() {
    if (this.X < this.radius || this.X > this.width - this.radius) {
      this.dirX = -this.dirX;
    }
    if (this.Y < this.radius || this.Y > this.height - this.radius) {
        this.dirY = -this.dirY;
    }
  }

  public init() {
    this.move();
  }

  public move() {
    this.resetDir();
    this.X += this.dirX * this.speed;
    this.Y += this.dirY * this.speed;
  }
}
