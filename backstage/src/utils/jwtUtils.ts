import jwt from 'jsonwebtoken';
import baseConfig from '../config/base.config';

export default class {
  static encode(payload: Object) {
    let token = jwt.sign(payload, baseConfig.jwt.privateKey, { algorithm: baseConfig.jwt.algorithm});
    return token;
  }

  static decode(token: string) {
    try {
      let decoded = jwt.verify(token, baseConfig.jwt.privateKey);
      return decoded;
    } catch (err) {
      // ignore
    }
    return null;
  }
}