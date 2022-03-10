import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { ProductButton } from "..";
import { Product } from "../../interfaces";

function ProductCard(props: Product) {
    const { img, name, category, cost } = props
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card >
                <CardMedia
                    component="img"
                    height="200"
                    image={img?.hdUrl}
                    alt={name}
                />
                <CardContent>
                    <Typography>
                        {name}
                    </Typography>
                    <Typography>
                        {category}
                    </Typography>
                </CardContent>
            </Card>
            <ProductButton cost={cost} />
        </Grid>
    )
}

export { ProductCard }