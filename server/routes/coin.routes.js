import express from 'express';
import {
  getCoins,
  getCoin,
  postCoin,
  deleteCoin,
} from '../controller/coin.controller.js';

const router = express.Router();

router.get('/coins', getCoins);
router.get('/coins/:coinId', getCoin);
router.post('/coins', postCoin);
router.delete('/coins/:coinId', deleteCoin);
// server.put('/coins/:coinId', updateCoin);

export default router;
