import { makeStyles } from "@mui/styles";
import { AerolabTextProps } from "../../interfaces";

const useStyles = makeStyles({
    textColor: {
        fontWeight: 'bold',
        background: '-webkit-linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
    }
});

function AerolabText({ children, fontSize }: AerolabTextProps) {
    const { textColor } = useStyles();

    return (
        <span className={textColor} style={{ fontSize: fontSize }}>
            {children}
        </span>
    )
}

export { AerolabText }