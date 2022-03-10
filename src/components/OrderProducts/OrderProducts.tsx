import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { OrderProductsProps } from "../../interfaces";
import { AerolabText } from "../AerolabText/AerolabText";

const useStyles = makeStyles({
    button: {
        padding: '8px 24px',
        borderRadius: '12px',
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

const LOWER_PRICE = 'Lower price'
const HIGHEST_PRICE = 'Highest price'

function OrderProducts(props: OrderProductsProps) {
    const { changeOrder, sortedBy } = props
    const { button, normalButton, selectedButton } = useStyles()
    const orderButtons = [{ value: HIGHEST_PRICE }, { value: LOWER_PRICE }]

    return (
        <>
            <Grid item>
                <AerolabText fontSize={14} grayText>Sort by:</AerolabText>
            </Grid>
            {orderButtons.map(({ value }, index) => (
                <Grid item key={index}>
                    <button className={`${button} ${sortedBy === value ? selectedButton : normalButton}`} onClick={() => changeOrder(value)}>
                        {sortedBy === value ? <span>{value}</span> : <AerolabText fontSize={13}>{value}</AerolabText>}
                    </button>
                </Grid>
            ))}
        </>
    )
}

export { OrderProducts }