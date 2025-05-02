import GajinoLogo from "../../../assets/Gajino/gjino logo.svg"

export const Introduction = () => {
    return (
        <section className=" w-full flex flex-col gap-[8px] items-center">
            <img src={GajinoLogo} alt="Gajino logo" className=" w-[140px]"/>
            <h2 className="text-[20px] font-bold">جدیدترین شیوه‌ی درس خواندن!</h2>
        </section>
    )
}