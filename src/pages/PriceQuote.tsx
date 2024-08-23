import React from "react";
import { observer } from "mobx-react-lite";
import { ContentPageContainer } from "../components/ContentPageContainer";
import { useRootStore } from "../store/commom/RootStoreContext";

const PriceQuote: React.FC = observer(() => {
  const { quote } = useRootStore();

  if (!quote) return <div>Loading...</div>;

  const totalPrice = quote.items.reduce((sum, item) => sum + item.price, 0);
  const totalDays = quote.items.reduce((sum, item) => sum + item.days, 0);

  return (
    <ContentPageContainer>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 pb-2 border-b-2 border-blue-500 text-gray-800">
          {quote.projectTitle}
        </h1>
        <div className="my-5 space-y-1">
          <div className="flex">
            <div className="w-16 font-semibold">לכבוד</div>
            <span>{quote.customerName}</span>
          </div>
          <div className="flex">
            <div className="w-16 font-semibold">מאת</div>
            <span>{quote.companyName}</span>
          </div>
        </div>

        {quote.items.map((item, index) => (
          <QuoteItem key={index} {...item} />
        ))}

        <div className="mt-8 pt-4 border-t-2 border-blue-500 ">
          <div className="flex justify-between items-center text-xl">
            <h2 className="font-bold text-gray-800">סיכום</h2>
            <p className="font-semibold text-lime-600">
              ₪{totalPrice.toLocaleString()}
            </p>
          </div>
          <div className="mt-2">משך זמן מוערך: {totalDays} ימי עבודה</div>
        </div>

        <div className="mt-12 text-gray-600">
          <div className=" text-xl mb-4">
            תנאים כלליים
          </div>

          {quote.terms.map((term, index) => (
            <div key={index} className="mb-4">
              <div className="font-semibold text-gray-800">{term.title}</div>
              <p>{term.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ContentPageContainer>
  );
});

const QuoteItem: React.FC<{
  title: string;
  description: string;
  price: number;
  days: number;
}> = ({ title, description, price, days }) => (
  <div className="mb-6 p-4 bg-gray-100 rounded-md">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="mb-5">{description}</p>
    <div className="flex justify-between items-center ">
      <p>{days} ימי עבודה</p>
      <p className="font-semibold text-lime-600 text-lg">
        {price.toLocaleString()} ₪
      </p>
    </div>
  </div>
);

export default PriceQuote;
