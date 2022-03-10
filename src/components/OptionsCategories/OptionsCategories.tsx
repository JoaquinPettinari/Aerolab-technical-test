import { MenuItem, Select } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { OptionsCategoriesProps } from "../../interfaces"
import { AerolabText } from "../AerolabText/AerolabText";


const useStyles = makeStyles({
    select: {
        padding: '8px 16px',
        borderRadius: '16px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #DAE4F2',
        color: '#7C899C',
        'height': '45px',
        marginLeft: '10px',
        '&:focus-visible': {
            outline: "0"
        }
    },
});


function OptionsCategories(props: OptionsCategoriesProps) {
    const { changeCategory, categories, categoryFilter } = props
    const { select } = useStyles();
    return (
        <>
            <AerolabText fontSize={14} grayText>
                Filter by:
            </AerolabText>
            <select onChange={changeCategory} className={select}>
                <option value="All products">All products</option>
                {categories.map((category, index) => (
                    <option value={category} key={index}>{category}</option>
                ))}
            </select>
        </>
    )
}

export { OptionsCategories }