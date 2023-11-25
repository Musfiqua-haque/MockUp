import React from 'react'

export default function Searchbar({filterText,
    inStockOnly,onFilterTextChange,onInStockOnlyChange}) {
  return (
    <div>
      <form action="">
        <input style={{display: "flex", flexDirection:"row"}} type="text" 
        value={console.log(filterText)} 
        placeholder='Search...' 
        onChange={(e) => onFilterTextChange(console.log(e.target.value))} />


        <label style={{paddingTop:"10px"}}>
            <input type="checkbox" 
            checked={inStockOnly} 
            onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
            {''}
            Only show products in stock
        </label>
      </form>
    </div>
  )
}
