import Bazar from "../../../assets/Gajino/Component 79.png"
import Myket from "../../../assets/Gajino/Component 78.png"
import Android from "../../../assets/Gajino/Component 77.png"
import IOS from "../../../assets/Gajino/Component 80.png"

export const AppStoreList = () => {
    return (
        <section className="w-full flex flex-col gap-[8px] items-center">

            <div className="grid grid-cols-2 grid-rows-2 gap-4 md:flex md:gap-[16px]">
                <a href="https://cafebazaar.ir/app/ir.gajino.android" target="_blank" referrerPolicy="no-referrer"
                   className="max-w-[182px]">

                    <div>
                        <img src={Bazar} alt="" data-tracking={`gajino_sec1_1`}
                             id={`gajino_sec1_1`}
                        />
                    </div>
                </a>

                <a href="https://myket.ir/app/ir.gajino.myket" target="_blank" referrerPolicy="no-referrer"
                   className="max-w-[182px]"
                   data-tracking={`gajino_sec1_2`}
                   id={`gajino_sec1_2`}>

                    <div>
                        <img src={Myket} alt=""/>
                    </div>
                </a>


                <a href="https://trc.metrix.ir/5a0esk?1735383218772" target="_blank" referrerPolicy="no-referrer"
                   className="max-w-[182px]"
                   data-tracking={`gajino_sec1_3`}
                   id={`gajino_sec1_3`}>

                    <div>
                        <img src={Android} alt=""/>
                    </div>
                </a>


                <a href="https://app.gajino.com" target="_blank" referrerPolicy="no-referrer" className="max-w-[182px]"
                   data-tracking={`gajino_sec1_4`}
                   id={`gajino_sec1_4`}>

                    <div>
                        <img src={IOS} alt=""/>
                    </div>
                </a>

            </div>


        </section>
    )
}