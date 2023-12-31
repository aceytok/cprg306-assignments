"use client";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import React from "react";

export default function Page() {
  const [items, setItems] = React.useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500">
      <div className="max-w-sm w-full">
        <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
