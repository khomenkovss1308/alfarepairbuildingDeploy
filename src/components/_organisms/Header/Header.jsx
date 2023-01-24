import { Menu } from '../../_molecules'
import './style.scss'

export const Header = () => {
    return (
        <div className="header">
            <div className="header_wrapper">
                <div className="logo"></div>
                <div className="header_work-time">
                    Пн-Сб: c 10:00 до 20:00
                    Выходной: воскресенье
                </div>
                <div className="header_order">
                    <div className="header_order-logo"></div>
                    <p className="header_order-text">Заказать 3D-макет дома</p>
                </div>
                <div className="link_btn">
                <div className="phone_wrapper">
                    <div className="phone_logo"></div>
                    <div className="phone_link">
                        <span className="phone-number">+7 (915) 168-55-50</span>
                        <div className="link_img-group"></div>
                    </div>
                </div>
                <button className="header_btn">
                    <span className="header_btn-text">Заказать звонок</span>
                </button>
                </div>
            </div>
            <Menu />
        </div>
    )
}