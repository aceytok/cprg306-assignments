export default function Item({name, quantity, category}) {
    return (
      <ul>
        <li class="p-2 m-4 bg-gradient-to-l from-gray-700 via-gray-900 to-black max-w-sm">
          <h3 class="text-xl font-bold">{name}</h3> 
          <p class="text-sm">Buy {quantity} in {category}</p> 
        </li>
      </ul>
  
  
    )
  }