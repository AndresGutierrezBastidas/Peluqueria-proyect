

import * as dotenv from 'dotenv'

dotenv.config({path: "./.env"}) // Load the environment variables
console.log(`The connection URL is ${process.env.DATABASE_URL}`)


