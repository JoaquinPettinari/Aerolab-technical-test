import { Container, Grid, Typography, useMediaQuery, Theme } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import HeroImage from '../../assets/hero-desktop.png'
import { AerolabButton } from "../AerolabButton/AerolabButton";
import { AerolabText } from "../AerolabText/AerolabText";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const useStyle = makeStyles((theme: Theme) => ({
    image: {
        width: '400px',
        height: '375px',
        zIndex: 1,
        [theme.breakpoints.down('md')]: {
            marginBottom: '-40px'
        }
    },
    container: {
        minHeight: '400px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    background: {
        aspectRatio: '10/8',
        position: 'absolute',
        bottom: '0',
        background: 'linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)',
        borderRadius: '70px',
        minHeight: '275px',
    },
    zoneText: {
        fontSize: '150px',
        fontWeight: '900',
        [theme.breakpoints.down('md')]: {
            fontSize: '100px',
        }
    },
    alignText: {
        textAlign: 'center'
    }
}))

function TechZone() {
    const { image, background, container, zoneText, alignText } = useStyle();
    const theme: Theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3} style={{ marginTop: '60px' }}>
                <Grid container item spacing={2} justifyContent={!matches ? 'center' : 'flex-start'} xs={12} md={6} className={!matches ? alignText : ''}>
                    <Grid item xs={12}>
                        <AerolabText fontSize={13} fontWeight={600} grayText>EXPLORE THE</AerolabText>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h1" mt={0} style={{ lineHeight: '0.767' }}>
                            <AerolabText fontSize={matches ? 150 : 100} fontWeight={900}>
                                TECH
                            </AerolabText>
                            <br /><span className={zoneText}>ZONE</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={10} sm={7}>
                        <AerolabText fontSize={15} grayText>Here you’ll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.</AerolabText>
                    </Grid>
                    <Grid item xs={6}>
                        <AerolabButton
                            onClick={() => document.getElementById('container-tech-products')?.scrollIntoView({ behavior: 'smooth' })}
                            isSelected
                        >
                            VIEW ALL PRODUCTS <ArrowDownwardIcon />
                        </AerolabButton>

                    </Grid>
                </Grid>
                <Grid container item xs={12} md={6} alignContent="flex-end" className={container}>
                    <img src={HeroImage} alt="Hero Image" className={image} />
                    {matches && <Grid item xs={9} className={background} />}
                </Grid>
            </Grid>
        </Container >
    )
}

export { TechZone }