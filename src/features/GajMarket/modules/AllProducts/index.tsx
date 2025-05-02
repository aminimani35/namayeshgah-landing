import GajLogo from "../../../../assets/Gajmarket/widget logo.svg"

export const AllProducts = () => {
    return (<div
        className="bg-[linear-gradient(90deg,_#1D4E86_0%,_#0657B4_100%)] w-full h-[120px] rounded-lg max-w-[380px]">


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


    </div>)
}