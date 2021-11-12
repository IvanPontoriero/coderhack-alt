import React from 'react';
import OrderBtn from './OrderBtn';
import FilterBtn from './FilterBtn';

const ChallengeHeader = () => {
    return(
        <div className='challenge__header--container'>
            <h3>Retos de nuestros emprededores</h3>
            <p>¡Cada idea suma!</p>
            <OrderBtn />
            <FilterBtn />
        </div>
    )
}

export default ChallengeHeader;