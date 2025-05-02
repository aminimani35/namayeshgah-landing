import './App.css'
import {GajMarket} from "./features/GajMarket";
import {TopHeader} from "./layout/TopHeader";
import {Gaj} from "./features/Gaj";
import {Azmoon} from "./features/Azmoon";
import {Gajino} from "./features/Gajino";
import {BottomNavigation, NavItem} from "./layout/BottomNavigation";

import GajMarketLogo from './assets/bottom-nav-icons/gajmarket-logo.svg';
import GajLogo from './assets/bottom-nav-icons/Gaj International Publications Logo.svg';
import AzmoonLogo from './assets/bottom-nav-icons/azmoon gaj 2.svg';
import GajinoLogo from './assets/bottom-nav-icons/gajino-active.svg';
import SVGObject from "./layout/BottomNavigation/SVGObject.tsx";

const navItems: NavItem[] = [
    {
        icon: <SVGObject src={GajMarketLogo} width="24" height="24" title="Gaj Market Logo"/>,
        targetId: 'gajmarket',
        color: '#2250A4',
    },
    {
        icon: <SVGObject src={GajLogo} width="24" height="24" title="Gaj Logo"/>,
        targetId: 'gaj',
        color: '#C5C636',
    },
    {
        icon: <SVGObject src={AzmoonLogo} width="24" height="24" title="Azmoon Logo"/>,
        targetId: 'azmoon',
        color: '#10717C',
    },
    {
        icon: <SVGObject src={GajinoLogo} width="24" height="24" title="Gajino Logo"/>,
        targetId: 'gajino',
        color: '#E83875',
    },
];


function App() {


    return (
        <div className="pb-[180px]">
            <TopHeader/>

            <main
                className="px-[16px] mt-[80px] mx-auto flex flex-col gap-[180px] max-w-[1024px] mx-auto">
                <GajMarket/>
                <Gaj/>
                <Azmoon/>
                <Gajino/>

            </main>
            <BottomNavigation items={navItems}/>
        </div>
    )
}

export default App
