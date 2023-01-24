import { BtnPrim, Input } from '../../_atoms'
import './style.scss'

export const Feedback = () => {
    return (
        <div className="feedback">
            <div className="feedback_img"></div>
            <div className="feedback_form">
                <h1 className="form_title">Не нашли то, что искали?</h1>
                <span className="form_desc">Заполните форму и мы перезвоним вам в течение 30 минут!</span>
                <Input text='Ваше имя' />
                <Input text='Номер телефона' />
                <input placeholder='Ваш вопрос  (необязательно)' className="input-big"/>
                <BtnPrim text='Отправить' />
            </div>
            <div>
                <div className="test"></div>
            </div>
        </div>
    )
}