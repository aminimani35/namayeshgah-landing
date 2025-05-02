import {brands} from "./brands";

export const BrandCarousel = () => {
    return (
        <section className="w-full">
            <div
                className="flex overflow-x-auto whitespace-nowrap space-x-4 px-4 py-2 rounded-[8px] border border-[#D0D0D0]">
                {brands.map((brand, index) => (
                    <div
                        className="w-[8.8rem] h-[8.8rem] flex-shrink-0"
                        key={index}
                    >
                        <a href={brand.link} target="_blank" rel="noreferrer">

                            <img
                                className="w-full h-full object-contain"
                                src={brand.img}
                                alt="brand"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};
