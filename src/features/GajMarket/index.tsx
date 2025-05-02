import {Introduction} from "./modules/Introduction";
import {AllProducts} from "./modules/AllProducts";
import {CategoryList} from "./modules/CategoryList";
import {BrandCarousel} from "./modules/BrandCarousel";

export const GajMarket = () => {


    return (
        <section className="flex flex-col w-full items-center gap-[24px] ">
            <Introduction/>
            <AllProducts/>
            <CategoryList/>
            <BrandCarousel/>
        </section>
    )
}