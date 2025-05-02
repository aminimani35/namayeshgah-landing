interface CountdownProps {
    unit: string;
    value: number;
}

export const CountDownPaper = ({unit, value}: CountdownProps) => {
    return (
        <div className="flex flex-col">
        <span
            className="countdown-paper w-[48px] h-[48px] bg-white rounded-[8px] border border-[#D0D0D0] text-[28px] font-bold flex justify-center items-center relative">
            <span className="z-2">

            {value}
            </span>
        </span>
            <span className="text-[13px]">{unit}</span>
        </div>
    )
}