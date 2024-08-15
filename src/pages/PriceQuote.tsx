import React from 'react';
import { ContentPageContainer } from '../components/ContentPageContainer';
import priceQuoteData from '../data/priceQuoteData.json';

const PriceQuote: React.FC = () => {
  const totalPrice = priceQuoteData.items.reduce((sum, item) => sum + item.price, 0);
  const totalDays = priceQuoteData.items.reduce((sum, item) => sum + item.days, 0);

  return (
    <ContentPageContainer>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md" >
        <h1 className="text-3xl font-bold mb-4 pb-2 border-b-2 border-blue-500 text-gray-800">{priceQuoteData.projectTitle}</h1>
        <p className="mb-4">
          <strong>לכבוד:</strong> {priceQuoteData.customerName}<br />
          <strong>מאת:</strong> {priceQuoteData.companyName}
        </p>
        
        {priceQuoteData.items.map((item, index) => (
          <QuoteItem key={index} {...item} />
        ))}

        <div className="mt-8 pt-4 border-t-2 border-blue-500 text-xl">
          <h2 className="font-bold text-gray-800">סיכום</h2>
          <p className="font-bold text-green-600">סך הכל להצעת המחיר: ₪{totalPrice.toLocaleString()}</p>
          <p>משך זמן מוערך: {totalDays} ימי עבודה</p>
        </div>

        <div className="mt-6 text-gray-600">
          {priceQuoteData.terms.map((term, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-gray-800">{term.title}</h3>
              <p>{term.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ContentPageContainer>
  );
};

const QuoteItem: React.FC<{
  title: string;
  description: string;
  price: number;
  days: number;
}> = ({ title, description, price, days }) => (
  <div className="mb-6 p-4 bg-gray-100 rounded-md">
    <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
    <p className="mb-2">{description}</p>
    <p className="font-bold text-green-600">מחיר: ₪{price.toLocaleString()}</p>
    <p>משך זמן מוערך: {days} ימי עבודה</p>
  </div>
);

export default PriceQuote;