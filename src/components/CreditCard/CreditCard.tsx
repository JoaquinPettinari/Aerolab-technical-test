import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useContext } from "react"
import KateIcon from '../../assets/aeropay-3.svg'
import { HomePageContext } from "../../views/HomePage/HomePage"

const useStyles = makeStyles({
    root: {
        background: '#252F3D',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
        borderRadius: '8px',
        height: '100px',
        padding: '10px',
        color: 'white'
    },
})

function CreditCard() {
    const { root } = useStyles()
    const { name } = useContext(HomePageContext);
    return (
        <Grid container direction={"column"} justifyContent="space-between" className={root}>
            <Grid item container justifyContent={"space-between"} direction={"row"}>
                <Grid item>
                    Aerocard
                </Grid>
                <Grid item>
                    <img src={KateIcon} alt="Icon" />
                </Grid>
            </Grid>
            <Grid item container justifyContent={"space-between"} direction={"row"}>
                <Grid item>
                    {name}
                </Grid>
                <Grid item>
                    7/03
                </Grid>
            </Grid>
        </Grid>
    )
}

export { CreditCard }