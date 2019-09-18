import Koa, { Context } from 'koa';
import router from './router/index';
import mongoose from 'mongoose';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import koaJwt from 'koa-jwt';
import baseConfig from './config/base.config';
import jwtUtils from './utils/jwtUtils';
import { HttpStateCode } from './constant/enums';
import { User } from './schema/UserSchema';
import { Payload } from './utils/payload';

const app = new Koa();

app.use(bodyParser());
app.use(helmet());

mongoose.connect(
  'mongodb://' 
  + baseConfig.mongo.host
  + ':'
  + baseConfig.mongo.port
  + '/'
  + baseConfig.mongo.database,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(async function(ctx: Context, next: any){
  
  if (ctx.url.match(/^\/api/)) {
    // check token
    if (ctx.headers.authorization) {
      let data: any = jwtUtils.decode(ctx.headers.authorization);
      if (!data || !data.email) {
        return ctx.response.body = JSON.stringify({
          code: HttpStateCode.Unauthorized,
          msg: 'Unauthorized!'
        });
      } else {
        let user = await User.findOne({email: data.email});
        if (!user) {
          return ctx.response.body = JSON.stringify({
            code: HttpStateCode.Unauthorized,
            msg: 'Unauthorized!'
          });
        } else {
          next();
        }
      }
    }
  } else {
    // other
    next();
  }
});

app.use(router.routes());
app.use(router.allowedMethods());



app.listen(9000, () => {
  console.log('http://localhost:9000');
});
