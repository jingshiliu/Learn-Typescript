import { ChangeEvent, FormEvent, useState } from "react"
import { generateUniqueId } from "../util"

interface ShoppingListFormProps{
    addToList(item: ShoppingItem): void
}

function ShoppingListForm({addToList}: ShoppingListFormProps) {
    const [itemName, setItemName] = useState<string>('')
    const [amount, setAmount] = useState<number>(0)

    function handleSubmit(e: FormEvent): void{
        e.preventDefault()
        if (amount <= 0){
            alert("Amount must be positive")
            return
        }
        if(itemName === ''){
            alert('Item Name cannot be empty')
            return
        }
        
        const newItem: ShoppingItem = {
            id: generateUniqueId(),
            amount,
            name: itemName
        }
        setAmount(0)
        setItemName('')
        addToList(newItem)
    }
    return (
        <form 
            onSubmit={handleSubmit}  
            className="border rounded flex justify-center items-center flex-col shadow-md m-4 p-4 w-full"
        >
            <label className="m-4" htmlFor="">
                Item Name: 
                <input 
                    type="text" 
                    name="name" 
                    value={itemName} 
                    className="border rounded"
                    onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                        setItemName(e.target.value)
                    }}
                />
            </label>
            <label className="m-4" htmlFor="">
                Amount:
                <input 
                    type="number" 
                    name="amount" 
                    value={amount} 
                    className="border rounded" 
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>{
                        setAmount(parseInt(e.target.value))
                    }}
                />
            </label>
            <button className="border px-8 py-2 m-4 shadow-lg rounded">Create</button>
        </form>
    )
}

export default ShoppingListForm