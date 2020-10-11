import dotenv from "dotenv";
import express from 'express';
import bodyParser from 'body-parser';
const app = express();

// Initializing config
dotenv.config();

const PORT = process.env.SERVER_PORT;


// Middleware

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Endpoints

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${PORT}`);
});