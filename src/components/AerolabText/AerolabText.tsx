import { makeStyles } from "@mui/styles";
import { AerolabTextProps } from "../../interfaces";

const useStyles = makeStyles({
    textColor: {
        fontWeight: 'bold',
        background: '-webkit-linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
    },
    grayTextStyle: {
        color: '#7C899C'
    }
});

function AerolabText({ children, fontSize, grayText }: AerolabTextProps) {
    const { textColor, grayTextStyle } = useStyles();

    return (
        <span className={grayText ? grayTextStyle : textColor} style={{ fontSize: fontSize }}>
            {children}
        </span>
    )
}

export { AerolabText }