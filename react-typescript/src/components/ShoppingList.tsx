interface ShoppingListProps{
    items: ShoppingItem[]
    deleteItem(index: number): void
}

function ShoppingList({items, deleteItem}: ShoppingListProps) {
  return (
    <ul className="w-2/3">
        {items.map((item, index) => (
            <li key={item.id} className="border-b-[1px] flex justify-between">
                <div>
                    <h4>{item.name}</h4>
                    <label htmlFor="">
                        Amount: {item.amount}
                    </label>
                </div>
                <button onClick={()=> deleteItem(index)}>Delete</button>
            </li>
            ))}
    </ul>
  )
}

export default ShoppingList