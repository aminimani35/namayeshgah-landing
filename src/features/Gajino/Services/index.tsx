import {GajinoServices} from "./list.tsx";

export const Services = () => {
    return (
        <section className="w-full flex flex-col gap-[8px] items-center">

            <div className="grid grid-cols-2 grid-rows-2  gap-4 md:flex md:gap-[16px]">
                {GajinoServices.map((service) => (
                    <a key={service.img} href={""}>
                        <img src={service.img} alt="Gajino"/>
                    </a>
                ))}
            </div>

        </section>
    )
}