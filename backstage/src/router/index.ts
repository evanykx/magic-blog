import Router from 'koa-router';
import UserController from '../controller/UserController';

const router = new Router();

router.post('/login', UserController.login);
router.get('/pub/img', UserController.img);

export default router;