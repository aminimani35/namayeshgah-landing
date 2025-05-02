import Bazar from "../../../assets/Gajino/Component 79.png"
import Myket from "../../../assets/Gajino/Component 78.png"
import Android from "../../../assets/Gajino/Component 77.png"
import IOS from "../../../assets/Gajino/Component 80.png"

export const AppStoreList = () => {
    return (
        <section className="w-full flex flex-col gap-[8px] items-center">

            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <a href="" target="_blank" referrerPolicy="no-referrer">

                    <div>
                        <img src={Bazar} alt=""/>
                    </div>
                </a>

                <a href="" target="_blank" referrerPolicy="no-referrer">

                    <div>
                        <img src={Myket} alt=""/>
                    </div>
                </a>


                <a href="" target="_blank" referrerPolicy="no-referrer">

                    <div>
                        <img src={Android} alt=""/>
                    </div>
                </a>


                <a href="" target="_blank" referrerPolicy="no-referrer">

                    <div>
                        <img src={IOS} alt=""/>
                    </div>
                </a>

            </div>


        </section>
    )
}