import uuidv1 from 'uuid/v1';

export default class {
  static Idx() {
    return uuidv1().split('-').join('').toUpperCase();
  }
}