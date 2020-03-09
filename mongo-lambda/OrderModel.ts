import * as mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  ticker: String,
  trader: String,
  side: String, // 'buy' or 'sell'
  limit: String, // price
  quantity: Number, // number of shares desired
  filledQuantity: Number, // number of shares traded
  status: String // 'open', 'canceled' or 'completed'
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
