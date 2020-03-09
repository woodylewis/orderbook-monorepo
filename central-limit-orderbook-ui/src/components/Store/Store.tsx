import React, {
  createContext,
  useState,
  useEffect,
  FunctionComponent,
} from 'react';

import io from 'socket.io-client';
import { fromEvent, Observable } from 'rxjs';

import { Message, Order } from '../../types';

let foundBids: Array<Order> = [];
let foundOffers: Array<Order> = [];

export const AppContext = createContext({
  foundBids: foundBids,
  foundOffers: foundOffers,
  sendMessage: (m: Message) => {},
});

export const Store: FunctionComponent = ({ children }) => {
  // eslint-disable-next-line
  const [bids, setBids] = useState<Array<Order>>([]);
  // eslint-disable-next-line
  const [offers, setOffers] = useState<Array<Order>>([]);

  let socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;
  socket = io('http://localhost:4000');

  const sendMessage = (message: Message) => {
    socket.emit(message);
  };

  const onOrders = (): Observable<Message> => {
    return fromEvent(socket, Message.BOOK);
  };
  const orderStream = onOrders();

  const newOrders = (): Observable<Message> => {
    return fromEvent(socket, Message.ORDER);
  };
  const newOrderStream = newOrders();

  useEffect(() => {
    orderStream.subscribe((orders: any) => {
      foundBids = orders.filter((o: Order) => {
        return o.side === 'buy';
      });
      foundOffers = orders.filter((o: Order) => {
        return o.side === 'sell';
      });
      setBids(foundBids);
      setOffers(foundOffers);
    });
    newOrderStream.subscribe((order: any) => {
      foundBids.push(order);
      console.log(foundBids.length);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{
        foundBids: foundBids,
        foundOffers: foundOffers,
        sendMessage: sendMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
