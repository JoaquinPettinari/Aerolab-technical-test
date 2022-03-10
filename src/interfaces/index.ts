export interface HomePageContextProps {
   coins: number;
   addCoints: (mount: number) => void;
   buyProduct: (mount: number) => void;
}

export interface Product {
   img: { hdUrl: string };
   cost: number;
   category: string;
   name: string;
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
}

export interface AerolabTextProps {
   children?: number | string;
   fontSize?: number;
   grayText?: boolean;
}

export interface OrderProductsProps {
   changeOrder: (order: string) => void;
   sortedBy: string;
}

export interface IconsButtonProp {
   coins: number;
}
