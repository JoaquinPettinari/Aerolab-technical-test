import { Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ProductButton } from "..";
import { Product } from "../../interfaces";

const useStyles = makeStyles({
    card: {
        border: '1px solid #DAE4F2',
        boxSizing: 'border-box',
        borderRadius: '16px'
    },
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
    const { img, name, category, cost, _id } = props
    const { nameStyle, categoryStyle, card } = useStyles()
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={card}>
                <CardMedia
                    component="img"
                    height="200"
                    image={img?.hdUrl}
                    alt={name}
                />
                <Divider />
                <CardContent>
                    <Typography className={nameStyle}>
                        {name}
                    </Typography>
                    <Typography className={categoryStyle}>
                        {category}
                    </Typography>
                </CardContent>
            </Card>
            <ProductButton cost={cost} id={_id} name={name} />
        </Grid>
    )
}

export { ProductCard }