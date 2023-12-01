"use client";

import React from "react";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service.js";
import { useEffect } from "react";

export default function Page() {
  const [items, setItems] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState("");

  const handleAddItem = (newItem) => {
    const itemID = addItem(user.uid, newItem);
    const updateItems = [...items, { id: itemID, ...newItem }];
    setItems(updateItems);
  };

  const handleSelectItem = (item) => {
    const itemName = item.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();
    setSelectedItem(itemName);
  };

  const { user } = useUserAuth();

  if (user === null) {
    window.location.href = "../";
    return null;
  }

  async function loadItems() {
    const items = await getItems(user.uid);
    setItems(items);
  }

  useEffect(() => {
    loadItems();
  }, [user.uid]);

  return (
    <main className="bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500">
      <div className="flex">
        <div className="max-w-sm w-full">
          <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleSelectItem} />
        </div>
        <div className="flex-1 max-w-sm m-2">
          <MealIdeas ingredient={selectedItem} />
        </div>
      </div>
    </main>
  );
}
