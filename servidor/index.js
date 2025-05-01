import express from 'express';
import { json } from 'express';
import cors from 'cors';
import routesNodemailer from './routes/routesNodemailer.js'; 
import routesProfesionales from './routes/routesProfesionales.js';
<<<<<<< HEAD
=======
import routesHoras from './routes/routesHoras.js';
import routesReserva from './routes/routesReserva.js';
import routesServices from './routes/routesServicios.js';
>>>>>>> presentacion

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:4200', // Your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));
app.use(json());

app.use('/api/nodemailer', routesNodemailer); 
app.use('/api/profesionales', routesProfesionales);
<<<<<<< HEAD
=======
app.use('/api/hours', routesHoras);
app.use('/api/services', routesServices);
app.use('/api/reserva', routesReserva);
>>>>>>> presentacion

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
