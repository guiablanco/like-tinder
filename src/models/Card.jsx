import Image from 'next/image';
import React from 'react';

const Card = ({element, transition}) => {
    return (
        <div className={"card " + transition}>
            <Image className='image'
                src={element.img}
                width={400}
                height={400}
                alt="imagen de usuario"
            />
        </div>
    );
}

export default Card;
