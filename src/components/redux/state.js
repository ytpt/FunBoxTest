import React from  'react';

let cardsState = [
    {
        id: 1,
        flavour: 'фуа-гра',
        portions: '10 ',
        mouseCount: '',
        mouse: 'мышь ',
        kilos: '0,5',
        footerNotChosenCard: 'Чего сидишь? Порадуй котэ,',
        footerChosenCard: 'Не каждый может позволить себе это лакомство.',
        footerNotAvailableCard: 'Печалька, с фуа-гра закончился.',
        link: 'купи',
        dot: '.',
        extra: '',
        isAvailable: true
    },
    {
        id: 2,
        flavour: 'рыбой',
        portions: '40 ',
        mouseCount: '2 ',
        mouse: 'мыши ',
        kilos: '2',
        footerNotChosenCard: 'Чего сидишь? Порадуй котэ,',
        footerChosenCard: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        footerNotAvailableCard: 'Печалька, с рыбой закончился.',
        link: 'купи',
        dot: '.',
        extra: '',
        isAvailable: true
    },
    {
        id: 3,
        flavour: 'курой',
        portions: '100 ',
        mouseCount: '5',
        mouse: 'мышей ',
        kilos: '5',
        footerNotChosenCard: 'Чего сидишь? Порадуй котэ,',
        footerChosenCard: 'Кура, всем курам кура.',
        footerNotAvailableCard: 'Печалька, с курой закончился.',
        link: 'купи',
        dot: '.',
        extra: 'заказчик доволен',
        isAvailable: false
    }
]

export default cardsState;