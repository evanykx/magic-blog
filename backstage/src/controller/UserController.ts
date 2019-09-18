import { User } from '../schema/UserSchema';
import { UserDoc } from '../document/UserDoc';
import { Context } from 'koa';
import { HttpStateCode } from '../constant/enums';
import baseConfig from '../config/base.config';
import jwtUtils from '../utils/jwtUtils';

export default class {
  static async login(ctx: Context) {
    let params = ctx.request.body;

    if (params && params.email) {
      let user: UserDoc | null = await User.findOne({email: ctx.request.body.email});
      if (!user) {
        return ctx.response.body = JSON.stringify({
          code: HttpStateCode.NotFound,
          msg: 'User not exists!'
        });
      }
      if (user && user.password !== ctx.request.body.password) {
        return ctx.response.body = JSON.stringify({
          code: HttpStateCode.BadRequest,
          msg: 'Password incorrect!'
        });
      }
      let payload = {
        exp: Math.floor(Date.now() / 1000) + baseConfig.jwt.expires,
        email: params.email
      };
      let token = jwtUtils.encode(payload);
      return ctx.response.body = JSON.stringify({
        code: HttpStateCode.OK,
        data: {
          token,
          username: user.alias,
          avatar: user.avatar
        }
      }); 
    }
  }

  static async img(ctx: Context) {
    let user: UserDoc | null = await User.findOne({email: 'evanyokou@outlook.com'});
    if (user) {
      return ctx.body = user.avatar;
    }else {
      return ctx.body = 'null';
    }
    
  }
}