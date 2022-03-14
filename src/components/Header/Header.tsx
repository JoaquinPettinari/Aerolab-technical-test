import { Container, Grid, Popover, Typography, } from "@mui/material"
import { useContext, useState } from "react";
import AerolabIcon from '../../assets/aerolab-logo-1.svg'
import { HomePageContext } from "../../views/HomePage/HomePage";
import { IconsButton } from "../IconsButton/IconsButton"
import { PopoverContent } from "../PopoverContent/PopoverContent";

function Header() {
    const { coins } = useContext(HomePageContext);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => !prev);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false)
    };
    return (
        <Container maxWidth="lg">
            <Grid container justifyContent="space-between" style={{ marginTop: '20px' }}>
                <Grid item>
                    <img src={AerolabIcon} alt="Aerolab icon" />
                </Grid>
                <Grid item>
                    <IconsButton coins={coins} onClick={handleClick} open={open} />
                </Grid>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <PopoverContent />
                </Popover>
            </Grid>
        </Container>
    )
}

export { Header }