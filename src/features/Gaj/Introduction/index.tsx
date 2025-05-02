import GajLogo from "../../../assets/Gaj/gaj logo.svg"

export const Introduction = () => {
    return (
        <section className="flex flex-col items-center gap-[24px]">
            <img src={GajLogo} alt="Gaj logo" className="w-[100px] h-[100px] md:h-[400px] md:w-[400px]"/>
            <div>
                <h2 className="text-[20px] font-bold mb-[8px] md:text-[32px]">انتشارات بین‌المللی گاج</h2>

                <p className="text-[13px] md:text-[16px]">با کتاب، آموزش آنلاین یا آزمون؛</p>
                <p className="text-[13px] md:text-[16px]"> گاج از نقطه‌ی صفر آموزش تا رسیدن به نتیجه با
                    شماست.</p>
            </div>
        </section>
    )
}