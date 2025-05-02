import {Introduction} from "./Introduction";
import {Products} from "./Products";

export const Gaj = () => {
    return (
        <section className="gaj flex flex-col w-full items-center justify-center  gap-[24px] md:flex-row" id="gaj">
            <Introduction/>
            <Products/>
        </section>
    )
}