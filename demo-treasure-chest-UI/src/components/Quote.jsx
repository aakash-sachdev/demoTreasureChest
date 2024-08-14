import React, { useState, useEffect } from 'react';

const Quote = ({ isDarkMode }) => {
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

  // Styles
  const containerStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    transition: 'background-color 0.2s ease, color 0.2s ease',
  };

  const buttonStyle = {
    backgroundColor: isDarkMode ? '#1a73e8' : '#007bff',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.2s ease',
  };

  return (
    <div style={containerStyle}>
      <h1>Quote of the Day</h1>
      <p>{quote.content}</p>
      <p><em>- {quote.author}</em></p>
      <button style={buttonStyle} onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
};

export default Quote;
