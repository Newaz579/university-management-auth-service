import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express()
const port = 5000;

//cors
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Working Successfully');
})

export default app;