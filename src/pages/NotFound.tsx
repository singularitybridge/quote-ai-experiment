import React from "react";
import { ContentPageContainer } from "../components/ContentPageContainer";

export const NotFound: React.FC = () => {
  return (
    <ContentPageContainer>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 pb-2 border-b-2 border-blue-500 text-gray-800 text-right">
          אופס! הבינה המלאכותית התבלבלה
        </h1>
        <div className="mt-5 text-right">
          <p className="mb-4">
            נראה שהבינה המלאכותית שלנו החליטה לקחת יום חופש ולטייל בעולם הדיגיטלי. היא כנראה מנסה ללמוד על 404 דרכים שונות להיעלם מהמסך. אל דאגה, אנחנו כבר מתכנתים אלגוריתם חיפוש מתקדם שישכנע אותה לחזור הביתה. בינתיים, אתם מוזמנים לנסות עמוד אחר או פשוט לדמיין שהגעתם בדיוק לאן שרציתם - הרי זה כל הקסם של בינה מלאכותית, לא?
          </p>
        </div>
      </div>
    </ContentPageContainer>
  );
};

export default NotFound;
