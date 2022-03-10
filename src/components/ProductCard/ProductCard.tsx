import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ProductButton } from "..";
import { Product } from "../../interfaces";

const useStyles = makeStyles({
    nameStyle: {
        color: '#252F3D',
        fontSize: '18px',
        fontWeight: '600'
    },
    categoryStyle: {
        color: '#7C899C',
        fontSize: '14px'
    }
})

function ProductCard(props: Product) {
    const { img, name, category, cost } = props
    const { nameStyle, categoryStyle } = useStyles()
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
                    <Typography className={nameStyle}>
                        {name}
                    </Typography>
                    <Typography className={categoryStyle}>
                        {category}
                    </Typography>
                </CardContent>
            </Card>
            <ProductButton cost={cost} />
        </Grid>
    )
}

export { ProductCard }