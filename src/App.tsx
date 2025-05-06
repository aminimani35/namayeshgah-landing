import './App.css'
import {GajMarket} from "./features/GajMarket";
// import {TopHeader} from "./layout/TopHeader";
import {Gaj} from "./features/Gaj";
import {Azmoon} from "./features/Azmoon";
import {Gajino} from "./features/Gajino";
import {BottomNavigation,} from "./layout/BottomNavigation";

function App() {


    return (
        <div className="pb-[180px]">
            {/*<TopHeader/>*/}

            <main
                className="px-[16px] mt-[80px] mx-auto flex flex-col gap-[180px] max-w-[1024px] mx-auto">
                <GajMarket/>
                <Gaj/>
                <Azmoon/>
                <Gajino/>

            </main>
            <BottomNavigation />
        </div>
    )
}

export default App
