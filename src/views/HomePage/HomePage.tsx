import { createContext } from 'react'
import { HomePageContextProps } from '../../interfaces';
import { Header, StepImages, TechZone, TechProducts, Snackbar } from '../../components';
import { useCoins } from '../../hooks/useCoins';
import { useProducts } from '../../hooks/useProducts';


export const HomePageContext = createContext({} as HomePageContextProps);
const { Provider } = HomePageContext;

function HomePage() {
    const { coins, addCoints, buyProduct, name } = useCoins();
    const { isLoading, categories, filteredProducts, categoryFilter, productsWithPagination, currentPage, changeCategory, changeOrder, changePage, sortedBy, redeemProduct, handleCloseSnacker, snackerData } = useProducts()
    return (
        <Provider value={{ coins, addCoints, buyProduct, name, isLoading, categories, filteredProducts, categoryFilter, productsWithPagination, currentPage, changeCategory, changeOrder, changePage, sortedBy, redeemProduct, handleCloseSnacker, snackerData }}>
            <Header />
            <TechZone />
            <StepImages />
            <TechProducts />
            <Snackbar />
        </Provider>
    )
}

export { HomePage };