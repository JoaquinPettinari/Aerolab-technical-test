import { Card, CardContent, CardMedia, Grid, Theme, useMediaQuery } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { AerolabText } from "../AerolabText/AerolabText";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        background: '#FFFFFF',
        margin: '0 0 100px',
        minHeight: '400px',
        padding: '30px 0'

    },
    background: {
        position: 'relative',
        background: 'linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)',
        minHeight: '300px'
    },
    grid: {
        position: 'absolute',
        [theme.breakpoints.down('md')]: {
            position: 'relative',
            textAlign: 'center'
        }
    },
    card: {
        minHeight: '350px',
        width: '300px',
        boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.05)',
        border: '10px solid #FFFFFF',
        background: '#FFFFFF',
        borderRadius: '32px',
        boxSizing: 'border-box',
        [theme.breakpoints.down('md')]: {
            width: '90%',
            margin: '0 20px'
        }
    },
    content: {
        border: '1px solid #DAE4F2',
        boxSizing: 'border-box',
        borderRadius: '0px 0px 24px 24px'
    },
    firstCard: {
        transform: 'rotate(357deg)',
        marginRight: '550px',
        zIndex: 1,
        [theme.breakpoints.down('md')]: {
            marginRight: '0',
            transform: 'rotate(0deg)',
        }
    },
    secondCard: {
        zIndex: 2
    },
    thirdCard: {
        transform: 'rotate(3deg)',
        zIndex: 3,
        marginLeft: '578px',
        [theme.breakpoints.down('md')]: {
            marginLeft: '0',
            transform: 'rotate(0deg)',
        }
    },
    iconStyle: {
        background: '#E5F0FF',
        borderRadius: '8px',
        marginRight: '10px',
        padding: '4px'
    }
}))

function StepImages() {
    const { grid, background, container, card, firstCard, secondCard, thirdCard, content, iconStyle } = useStyles();
    const theme: Theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const cards = [
        {
            image: "/src/assets/walkthroug-1-desktop.png",
            alt: "walkthroug-1-desktop.png",
            title: '1—BROWSE',
            subtitle: 'Browse our tech catalog with more than 20 top tech products',
            customStyle: firstCard,
            icon: "/src/assets/walkthrough-1.svg"
        },
        {
            image: "/src/assets/walkthroug-2-desktop.png",
            alt: "walkthroug-2-desktop.png",
            title: '2—CHOOSE',
            subtitle: 'Exchange your hard earned AeroPoints for the item you want',
            customStyle: secondCard,
            icon: "/src/assets/walkthrough-2.svg"
        },
        {
            image: "/src/assets/walkthroug-1-desktop.png",
            alt: "walkthroug-3-desktop.png",
            title: '3—ENJOY!',
            subtitle: 'All done, you can relax! We’ll take care of delivery of your tech item!',
            customStyle: thirdCard,
            icon: "/src/assets/walkthrough-3.svg"
        }
    ]
    return (
        <Grid container justifyContent="center" alignContent="flex-end" className={`${container} ${!matches && background}`} spacing={!matches ? 1 : 0}>
            {cards.map(({ image, alt, title, subtitle, customStyle, icon }, index) => (
                <Grid item xs={12} sm={4} className={`${grid} ${customStyle}`} key={index}>
                    <Card className={card}>
                        <CardMedia
                            component="img"
                            height="240"
                            image={image}
                            className={background}
                            alt={alt}
                        />
                        <CardContent className={content}>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <img src={icon} className={iconStyle} alt="walkthroug icon" />
                                </Grid>
                                <Grid item style={{ marginBottom: '6px', fontWeight: '900 !important' }}>
                                    <AerolabText fontSize={25} fontWeight={900}>{title}</AerolabText><br />
                                </Grid>
                                <Grid item xs={12}>
                                    <AerolabText fontSize={13} grayText>{subtitle}</AerolabText>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            {matches && <Grid item xs={12} className={background} />}
        </Grid>
    )
}

export { StepImages }