import { types, flow } from "mobx-state-tree";
import { Quote } from "./Quote";
import { fetchQuoteData } from "../../services/quoteDataService";

export const RootStore = types
  .model("RootStore", {
    quote: types.maybe(Quote),
  })
  .actions((self) => ({
    loadQuote: flow(function* () {
      try {
        const quoteData = yield fetchQuoteData();
        self.quote = Quote.create(quoteData);
      } catch (error) {
        console.error("Failed to load quote data:", error);
      }
    }),
  }));
