import express from 'express';
import { json } from 'express';
import routesNodemailer from './routes/routesNodemailer.js'; 

const app = express();
const port = 3000;

app.use(json());

app.use('/api/nodemailer', routesNodemailer); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
