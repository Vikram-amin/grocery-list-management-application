import React from 'react'
import GroceryInput from './GroceryInput'
import GroceryList from './GroceryList'

import { v4 as uuid } from 'uuid';

function Grocery() {
    const [items,setItems] = React.useState([])


    const handleAdd = (query)=>{
        const payLoad ={
            query,
            id:uuid()
        };
        setItems([...items,payLoad])
    }

    const handleDelete = (id) => {
        const updatedData = items.filter((item) => item.id !== id );
        setItems( updatedData )
    }

   

  return (
    <>
    <h1>Grocery List</h1>
    <GroceryInput handleAddProp ={handleAdd}/>
    {
        items.map((item) => (
          
            <GroceryList
              {...item}
              key={item.id}
              handleDelete={handleDelete}
            />
        ))
    }
  
  
    </>
  )
}

export default Grocery