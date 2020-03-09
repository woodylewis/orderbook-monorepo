/* eslint no-console: 0 */
import { from } from "rxjs";
import * as mongoose from "mongoose";
import records from "./mock/mockBids";
import Order from "./models/OrderModel";

const seed = (): void => {
  Order.find({}, (err, foundRecords) => {
    if (err) {
      console.log("error finding records");
    } else if (foundRecords.length === 0) {
      try {
        console.log("loading data");
        const localRecords$ = from(records);
        localRecords$.subscribe({
          next: r => {
            const m = new Order(r);
            m.save(localErr => {
              if (localErr) {
                return localErr;
              }
              return "good";
            });
          },
          error: e => console.log(`db subscribe error ${e}`),
          complete: () => console.log("done loading data")
        });
      } catch (e) {
        console.log(`db error = ${e}`);
      }
    } else {
      console.log(`# of records = ${foundRecords.length}`);
    }
  });
};

export const getLatest = async (): Promise<any> => {
  return await Order.find().limit(1).sort({$natural: -1});
};

export const getCount = async (): Promise<number> => {
  return await Order.countDocuments();
};

export const initDb = (): void => {
  try {
    const mongooseConnection = from(
      mongoose.connect(
        "mongodb+srv://sn_admin:T5Qj4SheAuahPzeG@cluster0-aekyh.mongodb.net/order-book?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      )
    );
    mongooseConnection.subscribe(() => {
      seed();
    });
  } catch (e) {
    console.log("db connect error");
  }
};
