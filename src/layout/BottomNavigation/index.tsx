import  { useEffect, useState } from 'react';
import SVGObject from './SVGObject';

export interface NavItem {
    title: string;           // gm, gj, az, gajino
    color: string;
    targetId: string;
}

export interface BottomNavigationProps {
    items: NavItem[];
    initialIndex?: number;
    transitionDuration?: number; // ms
    scrollOffset?: number;
}


const navItems: NavItem[] = [
    {
       title:"gm",
        targetId: 'gajmarket',
        color: '#2250A4',
    },
    {
       title:"gj",
        targetId: 'gaj',
        color: '#C5C636',
    },
    {
       title:"az",
        targetId: 'azmoon',
        color: '#10717C',
    },
    {
       title:"gajino",
        targetId: 'gajino',
        color: '#E83875',
    },
];


export const BottomNavigation= () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleClick = (index: number, targetId: string) => {
        setActiveIndex(index);
        const el = document.getElementById(targetId);
        if (el) {
            const top = el.getBoundingClientRect().top + + window.pageYOffset - 75;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const onScroll = () => {
            const scrollPos = window.pageYOffset + 75 + 1;
            let newIndex = activeIndex;
            for (let i = 0; i < navItems.length; i++) {
                const el = document.getElementById(navItems[i].targetId);
                const nextTop = i < navItems.length - 1
                    ? document.getElementById(navItems[i + 1].targetId)?.offsetTop || Infinity
                    : Infinity;
                if (el && scrollPos >= el.offsetTop && scrollPos < nextTop) {
                    newIndex = i;
                    break;
                }
            }
            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [navItems, activeIndex]);

    const activeColor = navItems[activeIndex]?.color;

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 bg-[#2250A4] h-[60px] z-30 md:w-[115px] md:h-[306px] md:right-0 md:top-[33%] md:rounded-l-[16px] transition-colors"
            style={{ backgroundColor: activeColor, transitionDuration: `${300}ms` }}
        >
            <ul className="flex justify-around relative md:flex-col md:h-full md:justify-evenly">
                {navItems.map((item, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                        <li key={item.title} onClick={() => handleClick(idx, item.targetId)} className="md:h-[52px] md:w-[100px] mx-auto">
                            <div
                                className={`p-2 h-full w-[100px] mx-auto rounded-[8px] flex justify-center items-center transition-colors duration-300 ${isActive ? 'bg-white' : ''}`}
                                style={isActive ? { color: item.color } : {}}
                            >
                                <SVGObject
                                    title={item.title}
                                    width="24"
                                    height="24"
                                    isActive={isActive}
                                />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
