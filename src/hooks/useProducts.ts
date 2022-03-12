import { ReactNode, useEffect, useMemo, useState } from "react";
import { getProducts } from "../utils/fetchData";
import {
   uniq,
   drop,
   take,
   sort,
   toLower,
   prop,
   compose,
   filter,
   isEmpty,
} from "ramda";
import { Product, SnackerDataProps } from "../interfaces";

const defaultProduct = [
   {
      img: { hdUrl: "" },
      cost: 0,
      category: "",
      name: "",
      _id: "",
   },
];

const defaultSnacker = { show: false, success: false, name: "" };
const pageSize = 8;
function useProducts() {
   const [categories, setCategories] = useState([]);
   const [products, setProducts] = useState<Product[]>(defaultProduct);
   const [categoryFilter, setCategoryFilter] = useState<string>("All products");
   const [sortedBy, setSortedBy] = useState("Highest price");
   const [currentPage, setCurrentPage] = useState(1);
   const [isLoading, setIsLoading] = useState(true);
   const [snackerData, setSnackerData] =
      useState<SnackerDataProps>(defaultSnacker);

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

   const handleCloseSnacker = (
      event?: React.SyntheticEvent | Event,
      reason?: string
   ) => {
      if (reason === "clickaway") {
         return;
      }

      setSnackerData({ ...snackerData, show: false });
   };

   const redeemProduct = (id: string, name: string) => {
      if (isEmpty(id)) {
         setSnackerData({ show: true, success: false, name: "" });
      } else {
         const newProductsList = products.filter(prod => prod._id !== id);
         setProducts(newProductsList);
         setSnackerData({ show: true, success: true, name });
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
         )(filteredProducts) as Product[],
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
      redeemProduct,
      handleCloseSnacker,
      snackerData,
   };
}

export { useProducts };
