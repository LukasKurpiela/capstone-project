import Transaction from '../models/transaction.model.js';

function getCoins(req, res) {
  Transaction.find().then((coins) => res.json(coins));
}

function getCoin(req, res) {
  const { coinId } = req.params;
  Transaction.findById(coinId)
    .then((cryptoCoin) => res.json(cryptoCoin))
    .catch((error) =>
      res.json({ message: 'Could not find coin with id: ' + coinId })
    );
}
function postCoin(req, res) {
  const transaction = new Transaction({
    name: req.body.name,
    symbol: req.body.symbol,
    image: req.body.image,
    id: req.body.id,
    buyOrSell: req.body.buyOrSell,
    exchange: req.body.exchange,
    price: req.body.price,
    quantity: req.body.quantity,
    date: req.body.date,
    note: req.body.note,
  });

  transaction
    .save()
    .then((coinSaved) => res.json(coinSaved))
    .catch((error) => res.json(error));
}

// function updateCoin(req, res) {
//   const { coinId } = req.params;
//   const updateCoin = req.body;
//   Coins.findByIdAndUpdate(
//     { id: coinId },
//     updateCoin,
//     { new: true },
//     (error, doc) => {
//       if (error) {
//         res.json({ message: 'Could not update this coin. ' });
//       }
//       res.json(doc);
//     }
//   );
// }

function deleteCoin(req, res) {
  const { coinId } = req.params;
  Transaction.findByIdAndDelete(coinId, (error, doc) => {
    if (error) {
      res.json({ message: 'Could not delete coin.' });
      return;
    }
    res.json({
      success: true,
      message: `The coin with the id ${coinId} has been deleted`,
      data: doc,
    });
  });
}

export { getCoins, getCoin, postCoin, deleteCoin };
