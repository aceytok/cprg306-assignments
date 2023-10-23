import ItemList from "./item-list.js";

export default function Page() {
  return(
    <main className="bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <ItemList />
    </main>
  );
}