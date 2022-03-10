import { Button } from '@mui/material';
import { ProductButtonProps } from '../../interfaces'
import KateIcon from '../../assets/aeropay-3.svg'
import KateDisabledIcon from '../../assets/aeropay-2.svg'
import { makeStyles } from '@mui/styles';
import { useContext } from 'react';
import { HomePageContext } from '../../views/HomePage/HomePage';

const useStyles = makeStyles({
    button: {
        background: 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)',
        marginTop: '10px',
        textTransform: 'inherit'
    },
    disabledButton: {
        background: '#E6EDF7',
        marginTop: '10px',
        textTransform: 'inherit'
    },
    img: {
        width: '15px',
        margin: '0 5px'
    }
});

function ProductButton(props: ProductButtonProps) {
    const { cost, id } = props
    const { button, disabledButton, img } = useStyles()
    const { coins, buyProduct, redeemProduct } = useContext(HomePageContext)
    const isDisabled = cost > coins

    const setPurchase = () => {
        buyProduct(cost, id, redeemProduct)
    }

    return (
        <>
            {!isDisabled ?
                <Button
                    variant="contained"
                    fullWidth
                    className={button}
                    onClick={setPurchase}
                >
                    Reedem for
                    <img src={KateIcon} alt="Icon" className={img} />
                    {cost}
                </Button>
                : <Button
                    fullWidth
                    variant="contained"
                    disabled
                    className={disabledButton}
                >
                    You need <img src={KateDisabledIcon} alt="Icon" className={img} />
                    {cost}
                </Button>
            }
        </>

    )
}

export { ProductButton };