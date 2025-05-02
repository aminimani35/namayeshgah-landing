import {list} from "./list.ts";

export const Services = () => {
    return (
        <section className="introduction flex flex-col w-full items-center  gap-[24px]">


            <div className="grid grid-cols-3 grid-rows-1 gap-4">


                {list.map((item) => (
                    <div key={Math.random()}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">


                            <img src={item.img} alt={item.caption}/>
                            <span className="text-[12px] font-bold">
                        {item.caption}
                    </span>
                        </a>
                    </div>
                ))}
            </div>


        </section>
    )
}