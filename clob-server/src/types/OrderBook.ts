import { Order } from "./Order";

export interface OrderBook {
  bids: Array<Order>;
  offers: Array<Order>;
}

export const initOrderBook = (): OrderBook => {
  const orderBook: OrderBook = {
    bids: [],
    offers: []
  };
  return orderBook;
};
