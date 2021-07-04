import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  image: String,
  id: String,
  buyOrSell: String,
  exchange: String,
  price: Number,
  quantity: Number,
  date: String,
  note: String,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
