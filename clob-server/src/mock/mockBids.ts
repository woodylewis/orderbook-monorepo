import { Order } from "../types";

const mockBids: Array<Order> = [
  {
    ticker: "TW",
    trader: "trader1",
    side: "buy",
    limit: "$99.50",
    quantity: 100,
    filledQuantity: 0,
    status: "open",
    createdAt: Date.now()
  },
  {
    ticker: "TW",
    trader: "trader1",
    side: "buy",
    limit: "$99.45",
    quantity: 350,
    filledQuantity: 0,
    status: "open",
    createdAt: Date.now()
  },
  {
    ticker: "TW",
    trader: "trader1",
    side: "buy",
    limit: "$99.40",
    quantity: 500,
    filledQuantity: 0,
    status: "open",
    createdAt: Date.now()
  }
];

export default mockBids;
