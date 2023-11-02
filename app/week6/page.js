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
      <div>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
