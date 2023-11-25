import React from 'react'

export default function Searchbar({filterText,
    inStockOnly,setFilterText,setInStockOnly}) {
  return (
    <div>
      <form action="">
      <input
          type="text"
          value={filterText} placeholder="Search..."
          onChange={(e) => setFilterText(e.target.value)} />


        <label style={{ paddingTop: "10px" }}>
          <input type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)} />
          {''}
          Only show products in stock
        </label>
      </form>
    </div>
  )
}
