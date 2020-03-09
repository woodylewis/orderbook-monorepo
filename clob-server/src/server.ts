/* eslint no-console: 0 */
import * as express from "express";
import * as socketIo from "socket.io";
import { createServer, Server } from "http";
import * as cors from "cors";
import { interval, Observable } from "rxjs";

import { initDb, getCount, getLatest } from "./db";
import { OrderBook, initOrderBook, Order, Message } from "./types";
import mockBids from "./mock/mockBids";
import mockOffers from "./mock/mockOffers";

export class clobServer {
  public static readonly PORT: number = 4000;
  private _app: express.Application;
  private server: Server;
  private io: SocketIO.Server;
  private port: string | number;
  private orderBook: OrderBook;
  private polling: Observable<any>;

  constructor() {
    this._app = express();
    this.port = clobServer.PORT;
    this._app.use(cors());
    this._app.options("*", cors());
    this.server = createServer(this._app);
    this.io = socketIo(this.server);
    initDb();
    this.orderBook = initOrderBook();
    this.orderBook.bids = mockBids;
    this.orderBook.offers = mockOffers;
    this.polling = interval(1000);
    this.listen();
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log(`Listening on ${this.port}`);
      let count:number;
      getCount().then(c => {
        count = c;
      });
      this.polling.subscribe(x => {
        getCount().then(c => {
          if (c > count) {
            count = c;
            getLatest().then(orders => {
              const o = orders[0];
              const newOrder = {
                ticker: o.ticker,
                trader: o.trader,
                side: o.side,
                limit: o.limit, 
                quantity: o.quantity,
                filledQuantity: o.filledQuantity,
                status: o.status,
                createdAt: Date.now()
              };
              console.dir(newOrder);
              console.log('NEW ORDER =========>');
              this.io.emit(Message.ORDER, newOrder);
            });
          }
        });
      });
    });

    this.io.on(Message.CONNECT, (socket: any) => {
      socket.on(Message.INIT_BOOK, (ticker: string) => {
        this.orderBook = initOrderBook();
      });

      socket.on(Message.PULL_BOOK, () => {
        const book: Array<Order> = [];
        if (this.orderBook.bids.length > 0) {
          this.orderBook.bids.forEach(bid => {
            book.push(bid);
          });
        }
        if (this.orderBook.offers.length > 0) {
          this.orderBook.offers.forEach(offer => {
            book.push(offer);
          });
        }
        socket.emit(Message.BOOK, book);
      });

      socket.on(Message.ORDER, (order: Order) => {
        if (order.side === "buy") {
          this.orderBook.bids.push(order);
        }
        if (order.side === "sell") {
          this.orderBook.offers.push(order);
        }
      });

      socket.on(Message.CLEAR_ORDERS, () => {
        //  Clear lists before each scenario
        this.orderBook.bids.length = 0;
        this.orderBook.offers.length = 0;
      });

      socket.on(Message.DISCONNECT, () => {});
    });
  }

  get app(): express.Application {
    return this._app;
  }
}
