import React from 'react'
import Searchbar from './Searchbar';
import ProductTable from './ProductTable';

export default function FilterableProductTable({products}) {

  const {filterText, setFilterText} = ('');
  const {inStockOnly, setInStockOnly} = (false)

  return (
    <div>
      <Searchbar 
      filterText={filterText}
      inStockOnly={inStockOnly}
      onFilterTextChange = {setFilterText}
      onInStockOnlyChange = {setInStockOnly}/>

      <ProductTable products={products}
      filterText={filterText}
      inStockOnly={inStockOnly}/>
    </div>
  )
}
