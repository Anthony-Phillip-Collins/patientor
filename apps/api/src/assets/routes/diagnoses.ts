import { Router, Request, Response } from 'express';
import diagnosesData from '../data/diagnosesData';
import { Diagnosis } from '@patientor/shared/types';

export const diagnosesRouter = Router();

diagnosesRouter.get('/', (_req: Request, res: Response) => {
  const data: Diagnosis[] = diagnosesData;
  return res.status(200).json(data);
});
