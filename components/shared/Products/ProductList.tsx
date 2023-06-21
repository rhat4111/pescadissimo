import React, { useEffect, useState } from 'react';
import { Filter } from './Filter';
import { Products } from './Products';
import { Pagination } from './Pagination';
import { privateEncrypt } from 'crypto';

interface Props {
  filter: object;
  ProductList: Array<object>;
}

export const ProductList: React.FC<Props> = ({ filter, ProductList }) => {

  const [filterJSON, setFilterJSON] = useState({ ...filter, priceList: [] });
  let priceList = [];

  useEffect(() => {
    Object.keys(ProductList).length > 0 && Object.keys(ProductList).map(index => {
      const item = ProductList[index];
      priceList.push(Number(item.price));
    });
    setFilterJSON({ ...filter, priceList });
  }, [ProductList]);

  console.log(ProductList);

  const [page, setPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const pageProducts = !ProductList ? [] : ProductList.slice((page - 1) * productsPerPage, page * productsPerPage);

  return (
    <>
      <Filter data={filterJSON} />
      <Products data={pageProducts} />
      <Pagination
        handlePagination={setPage}
        currentPage={page}
        totalPageCount={Math.ceil(ProductList.length / productsPerPage)}
      />
    </>
  );
};