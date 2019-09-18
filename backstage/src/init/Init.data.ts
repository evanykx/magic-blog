import mongoose from 'mongoose';
import { User } from '../schema/UserSchema';
import baseConfig from '../config/base.config';
import Generator from '../utils/entityGenerator';
import fs from 'fs';
import path from 'path';
import { UserDoc } from '../document/UserDoc';


export const initData = async () => {
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
  
  let file  = path.join(path.dirname(__dirname), 'assets/me.jpg');
  console.log(file);
  let img = fs.readFileSync(file);

  let existUser = await User.findOne({email: 'evanyokou@outlook.com'});
  if (!existUser) {
    let user: UserDoc = new User({
      email: 'evanyokou@outlook.com',
      phone: '18372070633',
      password: 'test',
      alias: 'evanykx',
      avatar: img,
      introduction: 'This man is lazy...',
      createBy: 'sys', 
      updateBy: 'sys'
    });
    
    await user.save((err, obj) => {
      if (err) {
        console.error(err);
      } else {
        console.log(JSON.stringify(obj));
      }
    });
  }

}
