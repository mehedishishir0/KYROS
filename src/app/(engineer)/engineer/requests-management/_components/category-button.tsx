import React from "react";

const CategoryButton = () => {
  const items = [
    { label: "All" },
    { label: "Awaiting Approval" },
    { label: "Assigned" },
    { label: "Rejected" },
  ];

  return (
    <div className="flex items-center gap-4">
      {items.map((item, index) => (
        <button key={index} className="bg-primary/10 text-gray-600 text-sm font-medium px-5 py-2 rounded-lg">{item.label}</button>
      ))}
    </div>
  );
};

export default CategoryButton;
