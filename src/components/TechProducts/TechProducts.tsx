import { Card, CardContent, CardMedia, CircularProgress, Container, Divider, Grid, Typography } from "@mui/material"
import { useProducts } from "../../hooks/useProducts"
import { Product } from "../../interfaces";
import { ProductButton, Pagination, OptionsCategories } from "..";
import { OrderProducts } from "../OrderProducts/OrderProducts";
import { makeStyles } from "@mui/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import { ProductCard } from "../ProductCard/ProductCard";
import { useContext } from "react";
import { HomePageContext } from "../../views/HomePage/HomePage";

function VerticalDivider() {
    return (
        <Grid item>
            <Divider orientation="vertical" />
        </Grid>
    )
}

const useStyles = makeStyles({
    title: {
        fontSize: '40px',
        fontWeight: '900',
        lineHeight: '80%'
    },
    blueText: {
        color: '#176FEB'
    },
    alignCenter: {
        textAlign: 'center'
    },
    alignEnd: {
        textAlign: 'end'
    }
})

function TechProducts() {
    const { isLoading, categories, filteredProducts, categoryFilter, productsWithPagination, currentPage, changeCategory, changeOrder, changePage, sortedBy } = useContext(HomePageContext)
    const totalPages = Math.ceil(filteredProducts.length / 8)
    const { blueText, title, alignCenter, alignEnd } = useStyles();

    const goToRepo = () => {
        window.open('https://github.com/JoaquinPettinari/Aerolab-technical-test', '_blank')
    }

    if (isLoading) {
        return (
            <Grid container justifyContent="center">
                <Grid item >
                    <CircularProgress />
                </Grid>
            </Grid>
        )
    }
    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid container item xs={12}>
                    <Grid item>
                        <span className={`${blueText} ${title}`}>
                            TECH
                        </span>
                    </Grid>
                    <Grid item>
                        <span className={title}>
                            PRODUCTS
                        </span>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-between" item xs={12} style={{ margin: '20px 0' }} spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <OptionsCategories categories={categories} changeCategory={changeCategory} categoryFilter={categoryFilter} />
                    </Grid>
                    <VerticalDivider />
                    <Grid container item xs={12} sm={4} spacing={1} alignItems="center" className={alignCenter}>
                        <OrderProducts changeOrder={changeOrder} sortedBy={sortedBy} />
                    </Grid>
                    <VerticalDivider />
                    <Grid item xs={12} sm={3} className={alignEnd}>
                        <Pagination currentPage={currentPage} totalPages={totalPages} changePage={changePage} />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3} justifyContent="center">
                    {productsWithPagination.map((product: Product, index) => (
                        <ProductCard {...product} key={index} />
                    ))}
                </Grid>
                <Grid container item alignItems='center' justifyContent='end' style={{ marginTop: '40px' }}>
                    <Grid item xs={12} sm={6} className={alignCenter}>
                        <Typography>
                            {productsWithPagination.length} of {filteredProducts.length} products
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} className={alignEnd}>
                        <Pagination currentPage={currentPage} totalPages={totalPages} changePage={changePage} />
                    </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} className={alignCenter} style={{ margin: '40px 0' }}>
                    <Grid item style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={goToRepo}>
                        <GitHubIcon />
                        <span>
                            View this repository
                        </span>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export { TechProducts }