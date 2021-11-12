import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ChallengeCard from './ChallengeCard';

const ChallengeList = ({ challenges, preload }) => {

    return(
        <div className='challenge__list--container'>
            {preload ? <Spinner animation="grow" variant="dark" /> : challenges.map((chall) => {
                return <ChallengeCard key={chall.id} challenge={chall} />
            })}
        </div>
    )
}

export default ChallengeList;