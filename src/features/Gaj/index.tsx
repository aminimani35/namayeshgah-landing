import {Introduction} from "./Introduction";
import {Products} from "./Products";

export const Gaj = () => {
    return (
        <section className="gaj flex flex-col w-full items-center  gap-[24px]">
            <Introduction/>
            <Products/>
        </section>
    )
}