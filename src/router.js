import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middleware/auth';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

export default routes;
