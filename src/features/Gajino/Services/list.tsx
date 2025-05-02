import Video from "../../../assets/Gajino/Frame 969.png"
import VLibrary from "../../../assets/Gajino/Frame 968.png"
import Schedule from "../../../assets/Gajino/Frame 69.png"
import SelfTest from "../../../assets/Gajino/Frame 70.png"

interface GajinoService {
    img: string
    link: string
}

export const GajinoServices: GajinoService[] = [
    {img: Video, link: ""},
    {img: VLibrary, link: ""},
    {img: Schedule, link: ""},
    {img: SelfTest, link: ""},
]