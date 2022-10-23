import React from "react";

const Loader = () => {
  return (
    <div className="self-center loader bg-gray-100 p-5 rounded-full flex space-x-3 max-w-fit mx-auto">
      <div className="w-4 h-4 bg-gray-800 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-gray-800 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-gray-800 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loader;
