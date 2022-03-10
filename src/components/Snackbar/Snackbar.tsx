import { Alert, Snackbar as SnackBarMui } from "@mui/material";
import { useContext } from "react";
import { HomePageContext } from "../../views/HomePage/HomePage";

function Snackbar() {
    const { handleCloseSnacker, snackerData } = useContext(HomePageContext)
    return (
        <SnackBarMui open={snackerData.show} autoHideDuration={6000} onClose={handleCloseSnacker}>
            {snackerData.success ?
                <Alert variant="outlined" onClose={handleCloseSnacker} severity="success" sx={{ width: '100%', backgroundColor: '#FFFFFF' }}>
                    <b>{snackerData.name}</b> redeemed successfully
                </Alert>
                : <Alert variant="outlined" onClose={handleCloseSnacker} severity="warning" sx={{ width: '100%', backgroundColor: '#FFFFFF' }}>
                    There was a problem with the transaction
                </Alert>
            }
        </SnackBarMui>
    )
}

export { Snackbar }