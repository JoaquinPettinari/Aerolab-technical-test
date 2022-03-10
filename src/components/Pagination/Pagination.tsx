import { makeStyles } from "@mui/styles";
import { PaginationProps } from "../../interfaces"
import { AerolabText } from "../AerolabText/AerolabText";

const useStyles = makeStyles({
    divStyle: {
        padding: '8px 16px',
        borderRadius: '16px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #DAE4F2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        background: '#E5F0FF',
        borderRadius: '8px',
        border: '1px solid #E5F0FF',
        width: '25px',
        height: '25px',
        cursor: 'pointer'
    }
});

function Pagination(props: PaginationProps) {
    const { currentPage, totalPages, changePage } = props
    const { divStyle, button } = useStyles()
    return (
        <div className={divStyle}>
            <button className={button} disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>{`<`}</button>
            <AerolabText fontSize={15}>{`Page ${currentPage} / ${totalPages}`}</AerolabText>
            <button className={button} disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}>{`>`}</button>
        </div>
    )
}

export { Pagination }