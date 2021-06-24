const validateQuantity = (quantity) => quantity > 0;
const validatePrice = (price) => parseFloat(price) > 0;

const validateEntry = (portfolioCoin) =>
  validateQuantity(portfolioCoin.quantity) &&
  validatePrice(portfolioCoin.price);

export default validateEntry;
