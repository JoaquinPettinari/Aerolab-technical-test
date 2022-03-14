import { FormEvent, MouseEvent, ReactNode, SyntheticEvent } from "react";

export interface HomePageContextProps {
   coins: number;
   addCoints: (mount: number) => void;
   buyProduct: (
      mount: number,
      id: string,
      name: string,
      callback: (id: string, name: string) => void
   ) => void;
   name: string;
   isLoading: boolean;
   categories: string[];
   filteredProducts: Product[];
   categoryFilter: string;
   productsWithPagination: Product[];
   currentPage: number;
   changeCategory: (event: FormEvent<HTMLSelectElement>) => void;
   changeOrder: (event: MouseEvent<HTMLButtonElement>) => void;
   changePage: (page: number) => void;
   sortedBy: string;
   redeemProduct: (id: string, name: string) => void;
   handleCloseSnacker: (
      event?: SyntheticEvent | Event,
      reason?: string
   ) => void;
   snackerData: SnackerDataProps;
}

export interface Product {
   img: { hdUrl: string };
   cost: number;
   category: string;
   name: string;
   _id: string;
}
export interface PaginationProps {
   currentPage: number;
   totalPages: number;
   changePage: (page: number) => void;
}

export interface OptionsCategoriesProps {
   changeCategory: (event: FormEvent<HTMLSelectElement>) => void;
   categories: string[];
   categoryFilter: string;
}

export interface ProductButtonProps {
   cost: number;
   id: string;
   name: string;
}

export interface AerolabTextProps {
   children?: number | string;
   fontSize?: number;
   fontWeight?: number | string;
   grayText?: boolean;
}

export interface OrderProductsProps {
   changeOrder: (event: MouseEvent<HTMLButtonElement>) => void;
   sortedBy: string;
}

export interface AerolabButtonProps {
   onClick: (event: MouseEvent<HTMLButtonElement>) => void;
   isSelected: boolean;
   value?: string | number;
   children: string | number | ReactNode;
}

export interface IconsButtonProp {
   coins: number;
   onClick: (event: MouseEvent<HTMLButtonElement>) => void;
   open: boolean;
}

export interface SnackerDataProps {
   show: boolean;
   success: boolean;
   name: string;
}
