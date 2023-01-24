import { Carousel } from '../Carusel'
import './style.scss'

export const Cards = () => {
    return (
        <div className='c'>
            <div className="cards_img-group">
                <div className="cards_img-group_vosduh"></div>
                <div className="cards_img-group_truba"></div>
            </div>
            <div className="cards_title">Вам также могут понравиться</div>
            <Carousel />
        </div>
    )
}