// CodeDisplay.js

import React from 'react';

const CodeDisplay = ({ text }) => {
  return (
    <pre className="bg-gray-800 p-4 rounded-md text-white my-5">
      <code className="text-sm">{text}</code>
    </pre>
  );
};

export default CodeDisplay;
