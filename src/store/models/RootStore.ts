import { types, flow } from "mobx-state-tree";
import { Quote } from "./Quote";
import { fetchQuoteData } from "../../services/quoteDataService";

export const RootStore = types
  .model("RootStore", {
    quote: types.maybe(Quote),
    isLoading: types.optional(types.boolean, false),
    error: types.maybe(types.string),
  })
  .actions((self) => ({
    loadQuote: flow(function* (quoteId: string) {
      self.isLoading = true;
      self.error = undefined;
      self.quote = undefined;
      try {
        if (!quoteId) {
          throw new Error("Quote ID is required");
        }
        const quoteData = yield fetchQuoteData(quoteId);
        self.quote = Quote.create(quoteData);
      } catch (error) {
        self.error = (error as Error).message;
      } finally {
        self.isLoading = false;
      }
    }),
  }));
