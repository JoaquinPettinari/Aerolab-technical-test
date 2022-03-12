import { createContext } from 'react'
import { HomePageContextProps } from '../../interfaces';
import { Header, StepImages, TechZone, TechProducts, Snackbar } from '../../components';
import { useCoins } from '../../hooks/useCoins';
import { useProducts } from '../../hooks/useProducts';
import Wave from '../../assets/single-wave-pattern.svg'


export const HomePageContext = createContext({} as HomePageContextProps);
const { Provider } = HomePageContext;

function HomePage() {
    const { coins, addCoints, buyProduct, name } = useCoins();
    const { isLoading, categories, filteredProducts, categoryFilter, productsWithPagination, currentPage, changeCategory, changeOrder, changePage, sortedBy, redeemProduct, handleCloseSnacker, snackerData } = useProducts()
    return (
        <Provider value={{ coins, addCoints, buyProduct, name, isLoading, categories, filteredProducts, categoryFilter, productsWithPagination, currentPage, changeCategory, changeOrder, changePage, sortedBy, redeemProduct, handleCloseSnacker, snackerData }}>
            <Header />
            <div style={{
                background: `url(${Wave})`,
                backgroundRepeat: 'repeat',
                backgroundSize: '20%',

            }}>
                <TechZone />
                <StepImages />
            </div>
            <TechProducts />
            <Snackbar />
        </Provider>
    )
}

export { HomePage };