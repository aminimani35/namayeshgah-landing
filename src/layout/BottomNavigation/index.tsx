import React, {ReactNode, useEffect, useState} from 'react';

export interface NavItem {

    icon: ReactNode;
    color: string;
    targetId: string;
}

export interface BottomNavigationProps {
    items: NavItem[];
    initialIndex?: number;
    transitionDuration?: number; // in ms
    scrollOffset?: number;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
                                                                      items,
                                                                      initialIndex = 0,
                                                                      transitionDuration = 300,
                                                                      scrollOffset = 75,
                                                                  }) => {
    const [activeIndex, setActiveIndex] = useState<number>(initialIndex);

    // Scroll to section on nav click
    const handleClick = (index: number, targetId: string) => {
        setActiveIndex(index);
        const el = document.getElementById(targetId);
        if (el) {
            const topPos = el.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
            window.scrollTo({top: topPos, behavior: 'smooth'});
        }
    };

    // Update activeIndex on manual scroll
    useEffect(() => {
        const onScroll = () => {
            const scrollPos = window.pageYOffset + scrollOffset + 1;
            let newIndex = activeIndex;

            for (let i = 0; i < items.length; i++) {
                const el = document.getElementById(items[i].targetId);
                if (el) {
                    const elemTop = el.offsetTop;
                    const nextElemTop = i < items.length - 1
                        ? document.getElementById(items[i + 1].targetId)?.offsetTop || Infinity
                        : Infinity;

                    if (scrollPos >= elemTop && scrollPos < nextElemTop) {
                        newIndex = i;
                        break;
                    }
                }
            }

            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        };

        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, [items, scrollOffset, activeIndex]);

    const activeColor = items[activeIndex]?.color;

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 bg-[#2250A4] h-[60px] z-30 md:w-[115px] md:h-[306px] md:right-0 md:top-[33%] md:rounded-l-[16px] transition-colors"
            style={{
                backgroundColor: activeColor,
                transitionDuration: `${transitionDuration}ms`,
            }}
        >
            <ul className="flex justify-around relative md:flex-col md:h-full md:justify-center">
             
                {items.map((item, idx) => {
                    const isActive = idx === activeIndex;

                    return (
                        <li
                            key={idx}
                            className="flex-1 text-center py-2 cursor-pointer"
                            onClick={() => handleClick(idx, item.targetId)}
                        >
                            <div
                                className={`
          p-2
          ${isActive ? 'bg-white' : ''}
          ${isActive ? 'rounded-full' : ''}
          transition-colors
          duration-300
        `}
                                style={
                                    isActive
                                        ? {color: item.color} // sets SVG fill via fill-current
                                        : {}
                                }
                            >
                                {/* SVG needs fill-current to use `color` */}
                                {React.cloneElement(
                                    item.icon as React.ReactElement,
                                    {
                                        className: 'fill-current w-6 h-6',
                                    }
                                )}
                            </div>
                        </li>
                    )
                })}


            </ul>


        </nav>
    );
};