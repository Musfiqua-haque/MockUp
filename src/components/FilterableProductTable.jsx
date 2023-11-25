import React, { useState } from 'react'
import Searchbar from './Searchbar';
import ProductTable from './ProductTable';

export default function FilterableProductTable({products}) {

  const {filterText, setFilterText} = useState('');
  const {inStockOnly, setInStockOnly} = useState(false);

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
