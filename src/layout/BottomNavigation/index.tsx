import React, {ReactNode, useState} from 'react';

export interface NavItem {
    label: string;
    icon: ReactNode;
    onClick?: () => void;
}

export interface BottomNavigationProps {
    items: NavItem[];
    initialIndex?: number;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({items, initialIndex = 0}) => {
    const [activeIndex, setActiveIndex] = useState<number>(initialIndex);

    const handleClick = (index: number, onClick?: () => void) => {
        setActiveIndex(index);
        if (onClick) onClick();
    };

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 border-t border-[#2250A4] bg-[#2250A4] h-[60px] z-3 md:w-[115px] md:h-[306px] md:right-0 md:top-[33%] ">
            <ul className="flex justify-around relative md:flex-col ">
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className="flex-1 text-center py-2 cursor-pointer"
                        onClick={() => handleClick(idx, item.onClick)}
                    >
                        <div
                            className={"flex flex-col items-center transition-colors duration-300 " + (activeIndex === idx ? 'text-blue-600' : 'text-gray-500')}>
                            {item.icon}
                            <span className="text-sm mt-1">{item.label}</span>
                        </div>
                    </li>
                ))}

            </ul>
        </nav>
    );
};
