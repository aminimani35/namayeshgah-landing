import GajLogo from "../../../assets/Gaj/gaj logo.svg"

export const Introduction = () => {
    return (
        <section className="flex flex-col items-center gap-[24px]">
            <img src={GajLogo} alt="Gaj logo" className="w-[100px] h-[100px]"/>
            <div>
                <h2 className="text-[20px] font-bold mb-[8px]">انتشارات بین‌المللی گاج</h2>

                <p className="text-[13px]">با کتاب، آموزش آنلاین یا آزمون؛</p>
                <p className="text-[13px]">با کتاب، آموزش آنلاین یا آزمون؛ گاج از نقطه‌ی صفر آموزش تا رسیدن به نتیجه با
                    شماست.</p>
            </div>
        </section>
    )
}