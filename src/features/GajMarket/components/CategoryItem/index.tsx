import {TCategoryItem} from "../../modules/CategoryList/items";

type Props = TCategoryItem

export const CategoryItem = (props: Props) => {

    const {img, label, link} = props

    return (
        <div className="relative flex justify-center items-center">

            <a href={link} target="_blank" rel="noopener noreferrer">
                {/*<span>{discount}</span>*/}
                <div className="media max-w-[120px] max-h-[135px] ">
                    <img src={img} alt={label} loading="lazy"/>
                </div>
                <span className="caption"></span>
            </a>
        </div>
    )
}