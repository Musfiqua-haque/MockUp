import { useState } from 'react';
import Searchbar from './Searchbar';
import ProductTable from './ProductTable';

export default function FilterableProductTable({ products }) {

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <Searchbar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly} />

      <ProductTable products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  )
}
