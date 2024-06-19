import React from "react";

const Stats = ({ items }) => {
  const numItems = items.length;
  const packed = items.filter((item) => item.packed).length;
  const packed_percent = Math.round((packed / numItems) * 100);
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  return (
    <footer className="stats">
      <em>
        {packed_percent === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You
        have ${numItems} items on your list, and you already packed ${packed} (
        ${packed_percent}%)`}
      </em>
    </footer>
  );
};

export default Stats;
