import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
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
    .then((results) => results.json())
    .then((data) => res.json(data.articles.slice(0, 20)));
});

server.use(express.static(path.join(__dirname, '../../client/build')));
server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

const port = process.env.PORT || 4000;
server.listen(port);
