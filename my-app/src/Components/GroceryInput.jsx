import React from 'react'
import "./GroceryList.css"

function GroceryInput({handleAddProp}) {
    const [query,setQuery] = React.useState("")
  return (
    <>
    <input placeholder="Enter Item" value ={query} onChange={(e) => setQuery(e.target.value)}/>
   <button onClick={() => {handleAddProp(query); setQuery(() => "")}}>Add</button>
    </>
  )
}

export default GroceryInput