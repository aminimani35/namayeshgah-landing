import {list} from "./list.ts";

export const Services = () => {
    return (
        <section className="introduction flex flex-col w-full items-center  gap-[24px] ">


            <div className="grid grid-cols-3 grid-rows-1 gap-4">


                {list.map((item, i) => (
                    <div key={Math.random()} className="md:w-[250px] text-center flex flex-col items-center gap-[24px]">
                        <a href={item.link} target="_blank" rel="noopener noreferrer"

                           data-tracking={`azm_sec1_${i + 1}`}
                           id={`azm_sec1_${i + 1}`}
                        >


                            <img src={item.img} alt={item.caption} className="md:w-[140px] md:h-[140px] md:mb-4"/>
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