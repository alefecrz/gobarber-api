import { Router } from 'express';

import User from './app/models/User';

const routes = Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Alefe Cruz',
    email: 'alefecrz@gmail.com',
    password_hash: '12e12323',
  });
  return res.send(user);
});

export default routes;
