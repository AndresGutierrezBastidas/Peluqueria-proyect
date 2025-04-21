import express from 'express';
import { json } from 'express';
import routesNodemailer from './routes/routesNodemailer.js'; 
import routesProfesionales from './routes/routesProfesionales.js';

const app = express();
const port = 3000;

app.use(json());

app.use('/api/nodemailer', routesNodemailer); 
app.use('/api/profesionales', routesProfesionales);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
