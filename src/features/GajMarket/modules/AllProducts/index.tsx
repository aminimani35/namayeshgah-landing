import GajLogo from "../../../../assets/Gajmarket/widget logo.svg"

export const AllProducts = () => {
    return (
        <a href="https://www.gajmarket.com/gaj-book-series?page=1&pageSize=32&sortType=most_purchased" target="_blank"
           rel="noopener noreferrer" className="w-full h-[120px] max-w-[380px]" data-tracking="gm_sec1" id="gm_sec1">
            <div
                className="bg-[linear-gradient(90deg,_#1D4E86_0%,_#0657B4_100%)] w-full h-[120px] rounded-lg">


                <div className="flex text-[20px] mx-auto text-white items-center pt-[16px] justify-center gap-[1.6rem]">


                    <div>
                        <img src={GajLogo} alt="Gaj Logo" loading="lazy"/>
                    </div>
                    <div className="col-span-2">
                        <p className="font-regular">
                            مشاهده تمام محصولات
                        </p>
                        <p className="font-bold">
                            انتشارات بین‌المللی گـــاج
                        </p>
                    </div>

                </div>


            </div>
        </a>
    )
}
