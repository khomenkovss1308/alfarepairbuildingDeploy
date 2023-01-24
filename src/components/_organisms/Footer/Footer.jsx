import './style.scss'

export const Footer = () => (
    <div className="wrapper_footer">
        <div className='footer'>
            <div className='footer_left_block'>
                <div className="footer_logo-left"></div>
                <button className="footer_btn">
                    Заказать звонок 
                </button>
            </div>
            <div className="footer_menu">
                <p className="footer_menu_item">Главная</p>
                <p className="footer_menu_item">Каталог</p>
                <p className="footer_menu_item">Услуги</p>
                <p className="footer_menu_item">Расчет стоимости</p>
                <p className="footer_menu_item">Консультация архитектора</p>
            </div>
            <div className="footer_menu">
                <p className="footer_menu_item">Экскурсия на объект</p>
                <p className="footer_menu_item">3D-макет дома</p>
                <p className="footer_menu_item">О нас</p>
                <p className="footer_menu_item">Блог</p>
                <p className="footer_menu_item">Контакты</p>
            </div>
            <div className="about">
                <p className="about_text">Делимся крутыми проектами в соц.сетях. Подписывайтесь!</p>
                <div className="link_footer">
                    <div className="link-vk"></div>
                    <div className="link-inst"></div>
                    <div className="link-facebock"></div>
                    <div className="link-youtube"></div>
                </div>
                <p className="about_text">Разработка и продвижение сайта:</p>
                <div className="footer_logo-light">

                </div>
            </div>
        </div>
    </div>
)