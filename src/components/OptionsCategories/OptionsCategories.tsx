import { OptionsCategoriesProps } from "../../interfaces"

function OptionsCategories(props: OptionsCategoriesProps) {
    const { changeCategory, categories } = props
    return (
        <>
            <span>
                Filter by:
            </span>
            <select onChange={changeCategory}>
                <option value="All products">All products</option>
                {categories.map((category, index) => (
                    <option value={category} key={index}>{category}</option>
                ))}
            </select>
        </>
    )
}

export { OptionsCategories }