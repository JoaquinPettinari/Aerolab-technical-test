import { makeStyles } from '@mui/styles'
import KateIcon from '../../assets/aeropay-1.svg'
import { AerolabText } from '..';
import { IconsButtonProp } from '../../interfaces';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const useStyles = makeStyles({
    buttonStyle: {
        padding: '8px 16px',
        borderRadius: '16px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #DAE4F2',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer'
        }
    },
});


function IconsButton(props: IconsButtonProp) {
    const { buttonStyle } = useStyles()
    return (
        <button className={buttonStyle} onClick={props.onClick}>
            <img src={KateIcon} alt="Icon" style={{ marginRight: '5px' }} />
            <AerolabText fontSize={16}>{props.coins}</AerolabText>
            {props.open
                ? <KeyboardArrowUpIcon color="disabled" />
                : <KeyboardArrowDownIcon color="disabled" />}
        </button>
    )
}

export { IconsButton }
