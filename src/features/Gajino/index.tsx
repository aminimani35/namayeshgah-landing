import {Introduction} from "./Introduction";
import {Services} from "./Services";
import {AppStoreList} from "./AppStoreList";

export const Gajino = () => (
    <section className="w-full flex flex-col gap-[8px]">
        <Introduction/>
        <Services/>
        <AppStoreList/>
    </section>
)