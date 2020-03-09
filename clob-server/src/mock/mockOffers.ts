import { Order } from "../types";

const mockOffers: Array<Order> = [
  {
    ticker: "TW",
    trader: "trader2",
    side: "sell",
    limit: "$99.55",
    quantity: 200,
    filledQuantity: 0,
    status: "open",
    createdAt: Date.now()
  },
  {
    ticker: "TW",
    trader: "trader2",
    side: "sell",
    limit: "$99.60",
    quantity: 300,
    filledQuantity: 0,
    status: "open",
    createdAt: Date.now()
  },
  {
    ticker: "TW",
    trader: "trader2",
    side: "sell",
    limit: "$99.75",
    quantity: 1000,
    filledQuantity: 0,
    status: "open",
    createdAt: Date.now()
  }
];

export default mockOffers;
