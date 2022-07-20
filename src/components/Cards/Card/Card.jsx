import React from 'react';
import c from './Card.module.css';
import cat from '../../../img/cat.png';

const Card = (props) => {

    const [isChosen, setIsChosen] = React.useState(false);

    const toggleClickCard = () => {
        setIsChosen(!isChosen);
    }

    // function ifCardDisabled(props) {
    //     const isAvailable = props.isAvailable;
    //     if (isAvailable) {
    //         return (!isAvailable);
    //     }
    // }
    //
    //     disableCard();

    return (
        <div className={c.card_wrap}>
            <a onClick={props.isAvailable ? toggleClickCard : null} className={
                props.isAvailable ? (isChosen ? c.chosen_card : c.card) : c.disabled_card}>
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
                <div className={props.isAvailable
                    ? (isChosen ? c.chosen_card_circle : c.card_circle)
                    : c.disabled_card_circle}>
                    <p className={c.card_circle_size}>
                        {props.kilos}
                        <span>кг</span>
                    </p>
                </div>
            </a>
            <div className={c.card_footer}>
                <p className={!props.isAvailable && c.disabled_footer_p}>{props.isAvailable
                    ? (isChosen ? props.footerChosenCard : props.footerNotChosenCard)
                    : props.footerNotAvailableCard}
                    <a className={c.card_footer_link}
                       onClick={props.isAvailable ? toggleClickCard : null}>
                        {props.isAvailable ? (!isChosen ? props.link : null) : null}
                    </a>
                    <span className={c.card_footer_dot}>
                        {props.isAvailable ? (!isChosen ? props.dot : null) : null}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Card;