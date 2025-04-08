const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.use('/api/nodemailer',require('./routes/routesNodemailer'));

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});