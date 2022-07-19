import React from 'react';
import c from './Card.module.css';
import cat from '../../../img/cat.png';

const Card = (props) => {

    const [isChosen, setIsChosen] = React.useState(false);

    const toggleClickCard = () => {
        isChosen ? setIsChosen(false) : setIsChosen(true);
    }

    return (
        <div className={c.card_wrap}>
            <a onClick={toggleClickCard} className={isChosen ? c.chosen_card : c.card}>
                <p className={c.card_header}>
                    Сказочное заморское яство
                </p>
                <h2>Нямушка</h2>
                <h3>с {props.flavour}</h3>
                <div className={c.card_description}>
                    <div className={c.card_description_portions}>
                        <p>
                            <span>{props.portions}</span>
                            порций
                        </p>
                        <p>
                            <span>{props.mouseCount}</span>
                            <span>{props.mouse}</span>
                            в подарок
                        </p>
                        <p>{props.extra}</p>
                    </div>
                </div>
                <img src={cat} alt='Кот' width='370' height='361'></img>
                <div className={isChosen ? c.chosen_card_circle : c.card_circle}>
                    <p className={c.card_circle_size}>
                        {props.kilos}
                        <span>кг</span>
                    </p>
                </div>
            </a>
            <div className={c.card_footer}>
                <p>{props.footer}
                    <a className={c.card_footer_link} onClick={() => alert('click')}>
                        {props.link}
                    </a>
                    <span className={c.card_footer_dot}>
                        {props.dot}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Card;