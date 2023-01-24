import './style.scss'
import { Input } from '../../_atoms' 

export const Product = () => {
    return (
        <div className="product">
            <div className="prd">
                <span className="product_title">Топас-С 4</span>
                <div className="product_desc">
                    <div className="img_zoom_group">
                        <div className="img_group2">
                            <div className="img1"></div>
                            <div className="img2"></div>
                            <div className="img3"></div>
                            <div className="img4"></div>
                        </div>
                        <div className="product_desc_img-group">
                            <div className="product_desc_img-group_zoom"></div>
                        </div>
                    </div>
                    <div>
                        <div className="product_desc_property">
                            <div className="product_desc_property_title">
                                <span className="text2">Количество пользователей:</span>
                                <span className="text2">Производительность:</span>
                                <span className="text2">Объем залпового сброса:</span>
                                <span className="text2">Глубина подводящей трубы:</span>
                                <span className="text2">Потребляемая электроэнергия:</span>
                            </div>
                            <div className="product_desc_property_desc">
                                <span className="desc2">4 человека</span>
                                <span className="desc2">0.8 м3/сут</span>
                                <span className="desc2">175 л.</span>
                                <span className="desc2">40-80 см</span>
                                <span className="desc2">1500 Вт/сут.</span>
                            </div>
                        </div>
                        <div className="product_desc_price">
                            <div className="product_desc_price_title">Цена:</div>
                            <div className="product_desc_price_desc">78 030 ₽</div>
                        </div>
                    </div>
                </div>
                <div className="feedback_description">
                    <div className="feedback_description_form">
                        <span className="feedback_description_form_text">Обсудим детали?</span>
                        <Input text='Ваше имя' />
                        <Input text='Номер телефона' />
                        <button className="feedback_description_form_btn">
                            <span className="text12">Хочу обсудить детали</span>
                        </button>
                    </div>
                    <div className="product-description">
                        <span className="product-description_title">Описание модели</span>
                        <span className="product-description_desc">
                            Индивидуальная система биологической очистки Топас-С 4, как и другие УОСВ из данного
                            модельного ряда, очищают стоки до 98% без вреда для экологии. Все модификации септика
                            ТОПАС-С 4 очищают до 0.8 м3 сточных вод в сутки и имеют максимальный залповый сброс в
                            районе 175 литров. Уже отработанную воду можно накапливать в отдельном резервуаре и в
                            дальнейшем использовать для хозяйственных нужд или производить сброс очищенной воды в
                            ливневую канаву (для моделей Пр со встороенным насосом).
                        </span>
                    </div>
                </div>
            </div>
            <div className="product-img">
                <div className="calc"></div>
                <div className="binoculars"></div>
                <div className="circul"></div>
                <div className="worker"></div>
            </div>
        </div>
    )
}