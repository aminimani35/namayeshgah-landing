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
    {
        img: Gajane,
        label: "پیشنهاد ویژه!",
        link: "https://www.gajmarket.com/incredible-offers?page=1&pageSize=32&sortType=most_discount"
    },
    {
        img: improvement,
        label: "کمک درسی",
        link: "https://www.gajmarket.com/%DA%A9%D8%AA%D8%A7%D8%A8-%DA%A9%D9%85%DA%A9-%D8%AF%D8%B1%D8%B3%DB%8C?page=1&pageSize=32&sortType=most_purchased"
    },
    {
        img: general,
        label: "عمومی",
        link: "https://www.gajmarket.com/%D8%AE%D8%B1%DB%8C%D8%AF-%DA%A9%D8%AA%D8%A7%D8%A8-%D8%B9%D9%85%D9%88%D9%85%DB%8C?page=1&pageSize=32&sortType=most_discount"
    },
    {
        img: teenagers,
        label: "کودک و نوجوان",
        link: "https://www.gajmarket.com/%D8%AE%D8%B1%DB%8C%D8%AF-%DA%A9%D8%AA%D8%A7%D8%A8-%DA%A9%D9%88%D8%AF%DA%A9-%D9%86%D9%88%D8%AC%D9%88%D8%A7%D9%86?page=1&pageSize=32&sortType=most_discount"
    },
    {
        img: university,
        label: "دانشگاهی",
        link: "https://www.gajmarket.com/%D8%AE%D8%B1%DB%8C%D8%AF-%DA%A9%D8%AA%D8%A7%D8%A8-%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87%DB%8C?page=1&pageSize=32&sortType=most_discount"
    },
    {
        img: language,
        label: "زبان خارجی",
        link: "https://www.gajmarket.com/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B2%D8%A8%D8%A7%D9%86?page=1&pageSize=32&sortType=most_discount"
    },
    {
        img: tools,
        label: "لوازم تحریر",
        link: "https://www.gajmarket.com/%D8%AE%D8%B1%DB%8C%D8%AF-%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%A7%D9%84%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1?page=1&pageSize=32&sortType=most_discount"
    },
    {
        img: GameAndLearn,
        label: "بازی و آموزش",
        link: "https://www.gajmarket.com/%D8%A8%D8%A7%D8%B2%DB%8C-%D9%88-%D9%85%D8%AD%D8%AA%D9%88%D8%A7%DB%8C-%D9%85%D9%88%D8%B2%D8%B4%DB%8C?page=1&pageSize=32&sortType=most_discount"
    }
];