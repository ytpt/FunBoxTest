import Card from './Card/Card';
import c from './Cards.module.css';
import cardsState from '../../components/redux/state';
import React from "react";

const Cards = (props) => {

    return (
        <div className={c.cards_container}>
            {cardsState.map(card => <Card
                key={card.id} flavour={card.flavour} portions={card.portions}
                mouseCount={card.mouseCount} mouse={card.mouse} kilos={card.kilos}
                link={card.link} dot={card.dot} extra={card.extra} isAvailable={card.isAvailable}
                footerNotChosenCard={card.footerNotChosenCard}
                footerChosenCard={card.footerChosenCard}
                footerNotAvailableCard={card.footerNotAvailableCard} />
                )
            }
        </div>
    )
}

export default Cards;