import { createContext } from 'react'
import { HomePageContextProps } from '../../interfaces';
import { Header, StepImages, TechZone, TechProducts } from '../../components';
import { useCoins } from '../../hooks/useCoins';


export const HomePageContext = createContext({} as HomePageContextProps);
const { Provider } = HomePageContext;

function HomePage() {
    const { coins, addCoints, buyProduct } = useCoins();
    return (
        <Provider value={{ coins, addCoints, buyProduct }}>
            <Header />
            {/*
            <TechZone />
            */}
            <StepImages />
            <TechProducts />
        </Provider>
    )
}

export { HomePage };