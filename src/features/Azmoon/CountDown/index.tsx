import {Countdown} from "../components/countdownTimer.tsx";

export const CountDown = () => {
    return (
        <section
            className="bg-[#FBFBFB] w-full flex flex-col gap-[8px] items-center md:max-w-[382px] py-[4px] rounded-[8px]">
            <h2 className="text-[20px] font-bold">تا کنکور تیر ۱۴۰۴</h2>
            <Countdown targetDate="2025-06-05T23:59:59"/>
        </section>
    )
}