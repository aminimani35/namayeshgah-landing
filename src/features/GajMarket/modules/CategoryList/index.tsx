import {categories} from "./items.ts";
import {CategoryItem} from "../../components/CategoryItem";

export const CategoryList = () => {


    return (<section className="category-list w-full">
        <div className="grid grid-cols-4 gap-4">
            {categories.map(category => (
                <CategoryItem {...category} />
            ))}


        </div>

    </section>)
}