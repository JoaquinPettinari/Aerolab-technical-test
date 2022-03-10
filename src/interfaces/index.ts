export interface HomePageContextProps {
   coins: number;
   addCoints: (mount: number) => void;
   buyProduct: (
      mount: number,
      id: string,
      callback: (id: string) => void
   ) => void;
   name: string;
   isLoading: boolean;
   categories: string[];
   filteredProducts: Product[];
   categoryFilter: string;
   productsWithPagination: Product[];
   currentPage: number;
   changeCategory: (event: React.FormEvent<HTMLSelectElement>) => void;
   changeOrder: (order: string) => void;
   changePage: (page: number) => void;
   sortedBy: string;
   redeemProduct: (id: string) => void;
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
   changeCategory: (event: React.FormEvent<HTMLSelectElement>) => void;
   categories: string[];
   categoryFilter: string;
}

export interface ProductButtonProps {
   cost: number;
   id: string;
}

export interface AerolabTextProps {
   children?: number | string;
   fontSize?: number;
   fontWeight?: number | string;
   grayText?: boolean;
}

export interface OrderProductsProps {
   changeOrder: (order: string) => void;
   sortedBy: string;
}

export interface AerolabButtonProps {
   onClick: (value?: string | number) => void;
   isSelected: boolean;
   value: string | number;
}

export interface IconsButtonProp {
   coins: number;
   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
