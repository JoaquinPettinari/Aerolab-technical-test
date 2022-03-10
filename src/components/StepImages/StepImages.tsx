import { Card, CardContent, CardMedia, Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        position: 'relative',
        background: 'linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)',
        margin: '100px 0',
        minHeight: '300px'
    },
    grid: {
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            textAlign: 'center'
        }
    },
    card: {
        height: '300px',
        width: '300px',
        boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.05)',
        border: '1px solid #DAE4F2',
        background: '#FFFFFFB2',

        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },
    firstCard: {
        transform: 'rotate(357deg)',
        marginRight: '550px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '0',
            transform: 'rotate(0deg)',
        }
    },
    thirdCard: {
        transform: 'rotate(3deg)',
        marginLeft: '578px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
            transform: 'rotate(0deg)',
            paddingBottom: '24px'
        }
    }
}))

function StepImages() {
    const { grid, container, card, firstCard, thirdCard } = useStyles();

    return (
        <Grid container justifyContent="center" className={container} spacing={3}>
            <Grid item xs={12} sm={3} className={`${grid} ${firstCard}`}>
                <Card className={card}>
                    <CardMedia
                        component="img"
                        height="240"
                        image="/src/assets/walkthroug-1-desktop.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        1—browse
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={3} className={grid}>
                <Card className={card}>
                    <CardMedia
                        component="img"
                        height="240"
                        image="/src/assets/walkthroug-2-desktop.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        2—choose
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={3} className={`${grid} ${thirdCard}`}>
                <Card className={card}>
                    <CardMedia
                        component="img"
                        height="240"
                        image="/src/assets/walkthroug-3-desktop.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        3—enjoy!
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export { StepImages }