import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeroImage from '../../assets/hero-desktop.png'
import { AerolabText } from "../AerolabText/AerolabText";

const useStyle = makeStyles({
    image: {
        maxWidth: '600px'
    }
})

function TechZone() {
    const { image } = useStyle();
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={11} sm={6}>
                    <div>
                        <Typography color="aerolabColor">Explore the</Typography>
                        <h2>
                            TECH
                        </h2>
                        <h2>Zone</h2>
                    </div>
                </Grid>
                <Grid item xs={11} sm={6}>
                    <img src={HeroImage} alt="Hero Image" className={image} style={{ background: 'linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)', borderRadius: '50px' }} />
                </Grid>
            </Grid>
        </Container>
    )
}

export { TechZone }