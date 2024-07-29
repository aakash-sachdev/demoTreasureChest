import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({ content: '', author: '' });

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random?tags=love|life|happiness|family');
      const data = await response.json();
      setQuote({ content: data.content, author: data.author });
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div>
      <h1>Quote of the Day</h1>
      <p>{quote.content}</p>
      <p><em>- {quote.author}</em></p>
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
};

export default Quote;
