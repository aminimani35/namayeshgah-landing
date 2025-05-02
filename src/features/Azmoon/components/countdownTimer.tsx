import React, {useEffect, useState} from 'react';
import {CountDownPaper} from "./CountDownPaper.tsx";

export interface CountdownProps {
    targetDate: Date | string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const calculateTimeLeft = (target: Date): TimeLeft => {
    const difference = target.getTime() - new Date().getTime();

    let timeLeft: TimeLeft = {days: 0, hours: 0, minutes: 0, seconds: 0};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};

export const Countdown: React.FC<CountdownProps> = ({targetDate}) => {
    const target = typeof targetDate === 'string' ? new Date(targetDate) : targetDate;
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(target));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(target));
        }, 1000);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <div className="flex flex-col gap-[8px]">
          

            <div className="flex space-x-4 text-center items-center gap-[8px]">

                <div>
                    <CountDownPaper unit="ثانیه" value={timeLeft.seconds}/>
                </div>

                <div>
                    <CountDownPaper unit="دقیقه" value={timeLeft.minutes}/>
                </div>

                <div>
                    <CountDownPaper unit="ساعت" value={timeLeft.hours}/>
                </div>

                <div>
                    <CountDownPaper unit="روز" value={timeLeft.days}/>
                </div>
            </div>
        </div>
    );
};
