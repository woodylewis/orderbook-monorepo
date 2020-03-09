import { Context } from "aws-lambda";
import * as mongoose from "mongoose";
import { from } from "rxjs";

import Order from "./OrderModel";

let conn: any = null;
const uri =
  "mongodb+srv://sn_admin:T5Qj4SheAuahPzeG@cluster0-aekyh.mongodb.net/order-book?retryWrites=true&w=majority";
const order = {
  ticker: "TW",
  trader: "trader1",
  side: "buy",
  limit: "$99.50",
  quantity: 100,
  filledQuantity: 0,
  status: "open",
  createdAt: Date.now()
};

exports.handler = async (event: any, context: Context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  if (conn == null) {
    try {
      conn = from(
        mongoose.connect(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          bufferCommands: false,
          bufferMaxEntries: 0
        })
      );
    } catch (e) {
      console.log("db connect error");
    }
  }
  const o = new Order(order);
  const result = await o.save(localErr => {
    if (localErr) {
      console.log('save error ' + localErr);
      return localErr;
    }
    return "good";
  });

  const count = await Order.countDocuments();

  return { count: count };
};
