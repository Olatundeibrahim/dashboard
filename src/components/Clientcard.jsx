import React from "react";

const Clientcard = ({name, title, date}) => {
  return (
    <div className="p-6 bg-white rounded-xl space-y-4">
      <div>
        <div>
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
        <p className="text-xs text-gray-300">{date}</p>
      </div>
    </div>
  );
};

export default Clientcard;
