import {Introduction} from "./Introduction";
import {Services} from "./Services";
import {CountDown} from "./CountDown";

export const Azmoon = () => {
    return (
        <section className="gaj flex flex-col w-full items-center  gap-[24px]">
            <Introduction/>
            <Services/>
            <CountDown/>

        </section>
    )
}