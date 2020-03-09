export interface Order {
  ticker: string;
  trader: string;
  side: string; // 'buy' or 'sell'
  limit: string; // price
  quantity: number; // number of shares desired
  filledQuantity: number; // number of shares traded
  status: string; // 'open', 'canceled' or 'completed'
  createdAt?: number;
}
