import express from 'express';
import cors from 'cors';
import * as path from 'path';
import { diagnosesRouter } from './assets/routes/diagnoses';
import { patientsRouter } from './assets/routes/patients';

const app = express();
app.use(express.json());

app.use(cors());

app.use('/', express.static(path.join(__dirname, '../frontend')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/health', (req, res) => {
  res.send('ok');
});

app.use('/api/diagnoses', diagnosesRouter);
app.use('/api/patients', patientsRouter);

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
