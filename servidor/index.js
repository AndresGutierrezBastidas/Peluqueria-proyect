import express from 'express';
import { json } from 'express';
import routesNodemailer from './routes/routesNodemailer.js'; 
import routesProfesionales from './routes/routesProfesionales.js';
import routesHoras from './routes/routesHoras.js';
import routesServices from './routes/routesServicios.js';

const app = express();
const port = 3000;

app.use(json());
// const cors = require('cors');
// app.use(cors({ origin: 'http://localhost:4200' }));


app.use('/api/nodemailer', routesNodemailer); 
app.use('/api/profesionales', routesProfesionales);
app.use('/api/hours', routesHoras)
app.use('/api/services', routesServices)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
