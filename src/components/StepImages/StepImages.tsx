import { Card, CardMedia, Grid } from "@mui/material";

function StepImages() {
    return (
        <Grid container justifyContent="center" style={{ background: 'linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)' }}>
            <Grid item xs={12} sm={3}>
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/src/assets/walkthroug-1-desktop.png"
                        alt="green iguana"
                    />
                </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/src/assets/walkthroug-2-desktop.png"
                        alt="green iguana"
                    />
                </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/src/assets/walkthroug-3-desktop.png"
                        alt="green iguana"
                    />
                </Card>
            </Grid>
        </Grid>
    )
}

export { StepImages }