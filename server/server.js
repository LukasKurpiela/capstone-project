import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import dirname from './lib/pathHelpers.js';
import coinRoutes from './routes/coin.routes.js';

const __dirname = dirname(import.meta.url);

dotenv.config();
const api_key = process.env.API_KEY;

const connectionString =
  process.env.DB_CONNECTION ||
  'mongodb://localhost:27017/capstone-project-cointrax';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// mongoose.set('returnOriginal', false);

const server = express();
server.use(cors());
server.use(express.json());

server.get('/health', (req, res) =>
  res.json({ status: 'Server is up and running' })

import path from 'path';
import dirname from './lib/pathHelpers.js';

const __dirname = dirname(import.meta.url);

const server = express();

dotenv.config();
const api_key = process.env.API_KEY;

server.use(cors());

server.get('/health', (req, res) =>
  res.json({ message: 'Server is up and running' })

);

server.get('/apiNews', (req, res) => {
  fetch(
    `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${api_key}`
  )
    .then((result) => result.json())
    .then((data) => res.json(data.Data))
    .catch((error) => res.json(error));
});


server.use(coinRoutes);

server.use(express.static(path.join(__dirname, '../../client/build')));
server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

const port = process.env.PORT || 4000;

server.listen(port, () => `Server is listening on port ${port}`);

server.listen(port);

