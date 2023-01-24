import React, { useEffect } from 'react'
import { Card } from '../../_molecules';
import './style.scss'

const slideWidth = 30;

const _items = [
    {
        product: {
            title: 'Топас-С 4',
            desc: 'До 4 человек',
            old_price: '86 700 ₽',
            new_price: '78 030 ₽',
        },
    },
    {
        product: {
            title: "Топас-С 4 Пр",
            desc: "До 4 человек",
            old_price: '98 300 ₽',
            new_price: '88 470 ₽',
        },
    },
    {
        product: {
            title: 'Топас-С 5',
            desc: 'До 5 человек',
            old_price: '99 500 ₽',
            new_price: '89 550 ₽',
        },
    },
    {
        product: {
            title: 'Топас-С 7',
            desc: 'До 6 человек',
            old_price: '86 700 ₽',
            new_price: '78 030 ₽',
        },
    },
    {
        product: {
            title: 'Топас-С 6',
            desc: 'До 7 человек',
            old_price: '89 550 ₽',
            new_price: '78 030 ₽',
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        product: _items[idx].product,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <Card
                title={item.product.title}
                desc={item.product.desc}
                old_price={item.product.old_price}
                new_price={item.product.new_price}
            />
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

export const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length)
    }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <div className="arrow_left"></div>
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <div className="arrow_right"></div>
                </button>
            </div>
        </div>
    );
};
