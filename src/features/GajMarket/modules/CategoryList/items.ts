import Gajane from "../../../../assets/Gajmarket/Frame 965.png"
import GameAndLearn from "../../../../assets/Gajmarket/Group 9767.png"
import tools from "../../../../assets/Gajmarket/Group 9768.png"
import university from "../../../../assets/Gajmarket/Group 9770.png"
import language from "../../../../assets/Gajmarket/Group 9769.png"
import general from "../../../../assets/Gajmarket/Group 9772.png"
import teenagers from "../../../../assets/Gajmarket/Group 9771.png"
import improvement from "../../../../assets/Gajmarket/Group 9773.png"


export interface TCategoryItem {
    img: string
    label: string
    // discount: number
    link: string
}


export const categories: TCategoryItem[] = [
    {img: Gajane, label: "پیشنهاد ویژه!", link: ""},
    {img: improvement, label: "کمک درسی", link: ""},
    {img: general, label: "عمومی", link: ""},
    {img: teenagers, label: "کودک و نوجوان", link: ""},
    {img: university, label: "دانشگاهی", link: ""},
    {img: language, label: "زبان خارجی", link: ""},
    {img: tools, label: "لوازم التحریر", link: ""},
    {img: GameAndLearn, label: "بازی و آموزش", link: ""},

]