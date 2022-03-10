import { Container, Grid } from "@mui/material"
import { useContext } from "react";
import AerolabIcon from '../../assets/aerolab-logo-1.svg'
import { HomePageContext } from "../../views/HomePage/HomePage";
import { IconsButton } from "../IconsButton/IconsButton"

function Header() {
    const { coins } = useContext(HomePageContext);
    return (
        <Container maxWidth="lg">
            <Grid container justifyContent="space-between" style={{ marginTop: '20px' }}>
                <Grid item>
                    <img src={AerolabIcon} alt="Aerolab icon" />
                </Grid>
                <Grid item>
                    <IconsButton coins={coins} />
                </Grid>
            </Grid>
        </Container>
    )
}

export { Header }