import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AerolabButtonProps } from "../../interfaces";
import { AerolabText } from "../AerolabText/AerolabText";

const useStyles = makeStyles({
    button: {
        padding: '8px 24px',
        borderRadius: '12px',
        width: '100%',
        border: '0',
        cursor: 'pointer',
        fontWeight: 'bold'
    },
    selectedButton: {
        background: 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)',
        textTransform: 'inherit',
        color: 'white',
    },
    normalButton: {
        background: '#E6F0FF',
    }
});

function AerolabButton(props: AerolabButtonProps) {
    const { onClick, isSelected, children, value } = props
    const { button, normalButton, selectedButton } = useStyles()

    return (
        <button className={`${button} ${isSelected ? selectedButton : normalButton}`} onClick={onClick} value={value}>
            {children}
        </button>
    )
}

export { AerolabButton }