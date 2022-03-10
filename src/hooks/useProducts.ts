import { ReactNode, useEffect, useMemo, useState } from "react";
import { getProducts } from "../utils/fetchData";
import { uniq, drop, take, sort, toLower, prop, compose, filter } from "ramda";
import { Product } from "../interfaces";
import { SelectChangeEvent } from "@mui/material";

const defaultProduct = [
   {
      img: { hdUrl: "" },
      cost: 0,
      category: "",
      name: "",
   },
];
const pageSize = 8;
function useProducts() {
   const [categories, setCategories] = useState([]);
   const [products, setProducts] = useState<Product[]>(defaultProduct);
   const [categoryFilter, setCategoryFilter] = useState<string>("All products");
   const [sortedBy, setSortedBy] = useState("Highest price");
   const [currentPage, setCurrentPage] = useState(1);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      getProducts().then(res => {
         const data = res.data;
         const categories = data.map(
            ({ category }: { category?: string }) => category
         );
         setCategories(uniq(categories));
         setProducts(data);
         setIsLoading(false);
      });
   }, []);

   const changeOrder = (order: string) => {
      setSortedBy(order);
   };

   const changePage = (newPage: number) => {
      setCurrentPage(newPage);
   };

   const changeCategory = (event: React.FormEvent<HTMLSelectElement>) => {
      setCurrentPage(1);
      setCategoryFilter(event.currentTarget.value);
   };

   const order = function (a: Product, b: Product) {
      if (sortedBy === "Highest price") {
         return b.cost - a.cost;
      } else {
         return a.cost - b.cost;
      }
   };

   const isSameCategory = (it: Product) =>
      it.category === categoryFilter || categoryFilter === "All products";

   const filteredProducts = useMemo<Product[]>(
      () => compose(filter(isSameCategory), sort(order))(products),
      [sortedBy, categoryFilter, products]
   );

   const productsWithPagination = useMemo<Product[]>(
      () =>
         compose(
            take(pageSize),
            drop(pageSize * (currentPage - 1))
         )(filteredProducts),
      [pageSize, currentPage, filteredProducts]
   );

   return {
      categories,
      categoryFilter,
      productsWithPagination,
      filteredProducts,
      currentPage,
      changeCategory,
      changeOrder,
      changePage,
      isLoading,
      sortedBy,
   };
}

export { useProducts };
