import { Button, Card, CardContent, CardMedia, CircularProgress, Container, Divider, Grid, Typography } from "@mui/material"
import { useState } from "react";
import { useProducts } from "../../hooks/useProducts"
import { Product } from "../../interfaces";
import { ProductButton, Pagination, OptionsCategories } from "..";

function VerticalDivider() {
    return (
        <Grid item>
            <Divider orientation="vertical" />
        </Grid>
    )
}

function TechProducts() {
    const { isLoading, categories, filteredProducts, productsWithPagination, currentPage, changeCategory, changeOrder, changePage } = useProducts()
    const totalPages = Math.ceil(filteredProducts.length / 9)

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
                <Grid item xs={12}>
                    <Typography>
                        TECH PRODUCTS
                    </Typography>
                </Grid>
                <Grid container justifyContent="space-between" item xs={12} style={{ marginBottom: '20px' }}>
                    <Grid item xs={12} sm={3}>
                        <OptionsCategories categories={categories} changeCategory={changeCategory} />
                    </Grid>
                    <VerticalDivider />
                    <Grid container item xs={12} sm={4} style={{ textAlign: 'center' }}>
                        <span>Sort by:</span>
                        <button onClick={() => changeOrder('Lower price')}>Lower price</button>
                        <button onClick={() => changeOrder('Highest price')}>Highest price</button>
                    </Grid>
                    <VerticalDivider />
                    <Grid item xs={12} sm={3} style={{ textAlign: 'end' }}>
                        <Pagination currentPage={currentPage} totalPages={totalPages} changePage={changePage} />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3} justifyContent="center">
                    {productsWithPagination.map((product: Product, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <Card >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.img?.hdUrl}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography>
                                        {product.name}
                                    </Typography>
                                    <Typography>
                                        {product.category}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <ProductButton cost={product.cost} />
                        </Grid>
                    ))}
                </Grid>
                <Grid container item justifyContent='end'>
                    <Grid item xs={12} sm={6}>
                        <Typography>
                            {productsWithPagination.length} of {filteredProducts.length} products
                        </Typography>
                    </Grid>
                    <Grid item xs={"auto"}>
                        <Pagination currentPage={currentPage} totalPages={totalPages} changePage={changePage} />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export { TechProducts }