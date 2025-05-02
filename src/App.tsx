import './App.css'
import {GajMarket} from "./features/GajMarket";
import {TopHeader} from "./layout/TopHeader";
import {Gaj} from "./features/Gaj";
import {Azmoon} from "./features/Azmoon";
import {Gajino} from "./features/Gajino";
import {BottomNavigation, NavItem} from "./layout/BottomNavigation";


const navItems: NavItem[] = [
    {label: 'Home', icon: <p>GajMarket</p>, onClick: () => console.log('Home')},
    {label: 'Search', icon: <p>Gaj</p>, onClick: () => console.log('Search')},
    {label: 'Notifications', icon: <p>Azmoon</p>, onClick: () => console.log('Notifications')},
    {label: 'Profile', icon: <p>Gajino</p>, onClick: () => console.log('Profile')},
];


function App() {


    return (
        <div className="pb-[180px]">
            <TopHeader/>

            <main className="px-[16px] mt-[80px] max-w-[1440px] mx-auto flex flex-col gap-[180px]">
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
