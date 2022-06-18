import Card from './Card/Card';
import c from './Cards.module.css';

const Cards = (props) => {

    return (
        <div className={c.cards_container}>
            <Card 
                flavour='фуа-гра' portions='10 ' mouseCount='' mouse='мышь ' 
                kilos='0,5' footer='Чего сидишь? Порадуй котэ,' 
                link='купи' dot='.' extra='' able='true'
                />
            <Card 
                flavour='рыбой' portions='40 ' mouseCount='2 ' kilos='2'
                footer='Головы щучьи с чесноком да свежайшая сёмгушка.'
                dot='' mouse='мыши ' extra='' able='true'
                />
            <Card
                flavour='курой' portions='100 ' mouseCount='5 ' mouse='мышей ' 
                kilos='5' footer='Печалька, с курой закончился.'
                dot='' extra='заказчик доволен' able='false' 
                />
        </div>
    )
}

export default Cards;