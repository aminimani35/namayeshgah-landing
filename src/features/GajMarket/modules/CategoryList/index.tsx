import {categories} from "./items.ts";

export const CategoryList = () => {


    return (<div className="category-list w-full">
        <div className="grid grid-cols-4 gap-4">
            {categories.map((category, i) => (
                <div className="relative flex justify-center items-center gap-[8px]">

                    <a href={category.link} target="_blank" rel="noopener noreferrer"
                       data-tracking={`gm_sec2_${i + 1}`}
                       id={`gm_sec2_${i + 1}`}
                    >
                        {/*<span>{discount}</span>*/}
                        <div className="media max-w-[120px] max-h-[135px] md:mb-4">
                            <img src={category.img} alt={category.label} loading="lazy"/>
                        </div>
                        <span className="caption font-bold text-[12px]">{category.label}</span>
                    </a>
                </div>


            ))}


        </div>

    </div>)
}