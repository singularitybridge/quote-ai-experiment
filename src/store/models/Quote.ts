import { types } from "mobx-state-tree";

const QuoteItem = types.model("QuoteItem", {
  title: types.string,
  description: types.string,
  price: types.number,
  days: types.number,
});

const Term = types.model("Term", {
  title: types.string,
  description: types.string,
});

export const Quote = types.model("Quote", {
  projectTitle: types.string,
  customerName: types.string,
  companyName: types.string,
  items: types.array(QuoteItem),
  terms: types.array(Term),
});