"use client";
import Item from "./item.js";
import React, { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }
  /*else if (sortBy === "groupedCategory") {
    const groupedItems = sortedItems.reduce((acc, item) => {
      const category = item.category.toLowerCase();
      acc[category] = acc[category] || [];
      acc[category].push(item);
      return acc;
    }, {});

    sortedItems = Object.keys(groupedItems).map(category => {
      return { category, items: groupedItems[category] };
    });

    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  } */

  return (
    <main className="bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500">
      <div className="m-4">
        <label htmlFor="sort">Sort By: </label>
        <button
          className="bg-orange-500 p-1 m-2 w-28"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className="bg-orange-500 p-1 m-2 w-28"
          onClick={() => setSortBy("category")}
        >
          Category
        </button>

        <ul>
          {sortedItems.map((item, index) => (
            <Item
              key={index}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
