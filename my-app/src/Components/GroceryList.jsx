import React from 'react'

function GroceryList({query,id,handleDelete}) {
  return (
    <div className="block">
     <h1>{query}</h1>
     <button onClick={() => handleDelete(id)}> Delete </button>
    </div>
  )
}

export default GroceryList