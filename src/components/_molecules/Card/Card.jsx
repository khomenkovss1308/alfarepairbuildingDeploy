import { BtnPrim, BtnSec } from '../../_atoms'
import './style.scss'

export const Card = ({ title, desc, old_price, new_price }) => {
    return (
        <div className="wrapper-card">
            <div className="card">
                <div className="card_img"></div>
                <div className='card_desc'>
                    <div className="card_desc_title">{title}</div>
                    <div className="card_desc_col">{desc}</div>
                    <div className='card_desc_old-price'>{old_price}</div>
                    <div className="card_desc_new-price">{new_price}</div>
                    <div className="card_desc_texts">
                        <div className="card_desc_texts_title">
                            Очистка
                        </div>
                        <div className="card_desc_texts_desc">
                            0,8 м3/сут
                        </div>
                    </div>
                    <div className="card_desc_texts-two">
                        <div className="card_desc_texts_title">
                            Залповый сброс:
                        </div>
                        <div className="card_desc_texts_desc">
                            175 л
                        </div>
                    </div>
                </div>
            </div>
            <div className="card_btn-group">
                <BtnSec />
                <BtnPrim text='Заказать' />
            </div>
        </div>
    )
}