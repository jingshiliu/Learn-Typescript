import { useState } from 'react'
import ShoppingList from './components/ShoppingList'
import ShoppingListForm from './components/ShoppingListForm'

function App() {
  const [items, setItems] = useState<ShoppingItem[]>([
    {
      id: 1,
      amount: 2,
      name: 'Sushi'
    },
    {
      id: 2,
      amount: 4,
      name: 'Gyoza'
    }
  ])

  function addToList(newItem: ShoppingItem): void{
    for(let item of items){
      if(item.name === newItem.name){
        item.amount += newItem.amount
        setItems([...items])
        return
      }
    }
    setItems([...items, newItem])
  }

  function deleteItem(index: number): void{
    setItems([...items.slice(0, index), ...items.slice(index + 1)])
  }

  return (
    <main className='flex justify-center'>
      <div className='container flex items-center flex-col'>
        <ShoppingListForm addToList={addToList} />
        <ShoppingList deleteItem={deleteItem} items={items}/>

      </div>
    </main>
  )
}

export default App
