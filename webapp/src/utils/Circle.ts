import Ball from './Ball';

export default class Circle {
  private o: any;
  private instance: any[] = new Array<any>();
  private width: number;
  private height: number;
  private ctx: any;
  private maxLineLength: number;
  private ball: any = {};
  private clockWay: boolean = false;

  constructor(o: any, ctx: any, width: number, height: number) {
    this.o = o || {};
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.instance = new Array<any>();
    this.maxLineLength = this.o.maxLineLength || 100;
  }

  public arc() {
    for (let i = 0; i < this.instance.length; i++) {
      const ball: any = this.instance[i];
      // this.ctx.save();
      this.ctx.fillStyle = ball.fillColor;
      this.ctx.strokeStyle = ball.borderColor;
      this.ctx.beginPath();
      this.ctx.arc(ball.X, ball.Y, ball.radius, ball.startDeg, ball.endDeg, this.clockWay);
      this.ctx.fill();
      this.ctx.closePath();
      // this.ctx.restore();
      for (let j = i + 1; j < this.instance.length; j++) {
          let s: number = Math.pow(ball.X - this.instance[j].X, 2) + Math.pow(ball.Y - this.instance[j].Y, 2);
          s = Math.sqrt(s);
          if (s < this.maxLineLength) {
              this.ctx.beginPath();
              this.ctx.moveTo(ball.X, ball.Y);
              this.ctx.lineTo(this.instance[j].X, this.instance[j].Y);
              this.ctx.strokeStyle = 'rgba(255, 255, 255, ' + (this.maxLineLength - s) / (this.maxLineLength * 1.3) + ')';
              this.ctx.strokeWidth = 1;
              this.ctx.stroke();
              this.ctx.closePath();
          }
      }
    }
  }

  public draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.arc();
  }

  public move() {
    for (const ball of this.instance) {
      ball.init();
    }
    this.draw();
    requestAnimationFrame(this.move.bind(this));
  }

  public init() {
    for (let i = 0; i < this.o.ballNums; i++) {
      this.instance.push(new Ball(this.o, this.ctx, this.width, this.height));
    }
    this.move();
  }
}
