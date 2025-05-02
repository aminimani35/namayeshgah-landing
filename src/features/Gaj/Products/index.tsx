import {products} from "./products.ts";

export const Products = () => {
    return (
        <section className="">


            <div className="grid grid-cols-4 grid-rows-1 gap-4">
                {products.map((item) => (
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href={item.link}>

                            <img src={item.img} alt={item.title} className="rounded-[8px]"/>
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