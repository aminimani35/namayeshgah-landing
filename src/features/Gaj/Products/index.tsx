import {products} from "./products.ts";

export const Products = () => {
    return (
        <section className="">


            <div className="grid grid-cols-4 grid-rows-1 gap-4 md:max-w-[616px]">
                {products.map((item, i) => (
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href={item.link}
                           data-tracking={`gaj_sec1_${i + 1}`}
                           id={`gaj_sec1_${i + 1}`}>

                            <img src={item.img} alt={item.title} className="rounded-[8px] md:mb-4"/>
                            <span className="caption text-[12px] font-bold">
                        {item.title}
                    </span>
                        </a>
                    </div>
                ))}
            </div>


        </section>
    )
}