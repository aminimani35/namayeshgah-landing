import GajMarketLogo from "../../../../assets/Gajmarket/Gajmarket logo.svg"


export const Introduction = () => {
    return (
        <section className="flex flex-col items-center gap-[8px] ">
            <img src={GajMarketLogo} alt="gajmarket logo" className="w-[196px] md:w-[400px]"/>
            <h2 className="text-[20px] font-bold md:text-[32px]">یک کتابخانه‌ی همه چیز تمام!</h2>
            <p className="text-[13px] md:text-[16px]">فروش ویژه‌ی کتاب‌های برتر درسی و غیردرسی از معتبرترین ناشران
                کشور</p>
        </section>
    )
}