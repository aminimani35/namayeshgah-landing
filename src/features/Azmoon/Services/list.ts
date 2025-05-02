import PishSabteNam from "../../../assets/Azmoon/Frame 968.png"
import ListeNamayandegi from "../../../assets/Azmoon/Frame 24.png"
import SabteNameNamayandegi from "../../../assets/Azmoon/Frame 970.png"
import HaleSoal from "../../../assets/Azmoon/Frame 973.png"
import Clinic from "../../../assets/Azmoon/Frame 972.png"
import Hekmat from "../../../assets/Azmoon/Frame 971.png"

export interface Item {
    img: string;
    caption: string;
    link: string;
}


export const list: Item[] = [
    {img: PishSabteNam, caption: "پیش ثبت نام", link: "https://azmoon.gaj.ir/Home/PreRegister"},
    {img: ListeNamayandegi, caption: "لیست نمایندگی ها", link: "https://azmoon.gaj.ir/home/Province"},
    {img: SabteNameNamayandegi, caption: "ثبت‌نام نمایندگی‌ها", link: "https://azmoon.gaj.ir/Home/PreRegisterNama"},
    {img: HaleSoal, caption: "حل سوالات آزمون‌ها", link: "https://www.driq.com/%D8%B3%D8%A7%D9%84-1404-1403"},
    {img: Clinic, caption: "کلینیک مشاوره", link: "https://azmoon.gaj.ir/home/clinic"},
    {img: Hekmat, caption: "ثبت‌نام طرح حکمت", link: "https://tbao.ir/Company?company=109"},

]