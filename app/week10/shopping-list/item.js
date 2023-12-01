export default function Item({ name, quantity, category, onSelect }) {
  return (
    <ul>
      <li className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer" onClick={()=> onSelect()} >
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm">
          Buy {quantity} in {category}
        </p>
      </li>
    </ul>
  );
}
