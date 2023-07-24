'use client'

import {useState} from 'react';

//images
import persona1 from '../assets/img/persona1.jpg';
import persona2 from '../assets/img/persona2.jpg';
import persona3 from '../assets/img/persona3.jpg';
import persona4 from '../assets/img/persona4.jpg';
import Card from './Card';

//Style
import '../styles/stackOfCards.css';
import '../styles/pageText.css';

const StackOfCards = () => {

const elementList = [
        {id: 1, img: persona1},
        {id: 2, img: persona2},
        {id: 3, img: persona3},
        {id: 4, img: persona4},
    ]

    const [transition, setTransition] = useState("");

    const [elements, setElements] = useState(elementList)

    const handleButtonClick = (side) => {
        setTransition(side);
        setTimeout(() => {
            setElements(elements.slice(0,-1));
            setTransition("");
    }, 500);
    }

    const topCard = elements.length > 0 ? elements[elements.length - 1] : null


    return (
        <div className='card-container'>
            <h2>Is &quot;the choosen one&quot;?</h2>
            {
                topCard ? (
                    <>
                        <Card element={topCard} transition={transition} />
                        <div className='button-container'>
                            <i className='fas fa-arrow-circle-left'
                            onClick={()=> handleButtonClick("swipe_left")}
                            >No ←</i>
                            <i className='fas fa-arrow-circle-right'
                            onClick={()=> handleButtonClick("swipe_right")}
                            >→ Yes </i>
                        </div> {" "}
                    </>
                ) 
                :
                (
                    <h2>There is no more profile to see</h2>
                )

            }
        </div> 
    );
}

export default StackOfCards;
