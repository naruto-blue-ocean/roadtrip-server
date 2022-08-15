require('dotenv').config()

const express = require('express');
import { Request, Response } from 'express';
const passport = require('passport');
require('./passportConfig')(passport);

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.post(
  "/auth/signup",
  passport.authenticate("local-signup", { session: false }),
  (req: Request, res: Response) => {
    res.json({ user: req.user });
  }
);
app.post(
  "/auth/login",
  passport.authenticate("local-login", { session: false }),
  (req: Request, res: Response) => {
    res.json({ user: req.user });
  }
);

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))