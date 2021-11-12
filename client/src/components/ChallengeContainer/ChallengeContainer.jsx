import { React, useState, useEffect } from 'react';
import { format } from 'date-fns';
import ChallengeList from './ChallengeList';
import ChallengeHeader from './ChallengeHeader';

const challenges = [
    {
        title: 'Challenge 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati tempore ea aut similique deserunt, laboriosam doloribus quaerat odit quam et non distinctio mollitia a sed, ipsam modi unde dolore animi!',
        tags: ['Energía Renovable', 'Salud', 'Social'],
        date: format(new Date(2021, 6, 11), 'dd / MM / yyyy')
    },
    {
        title: 'Challenge 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.',
        tags: ['Energía Renovable', 'Salud', 'Social'],
        date: format(new Date(2021, 8, 1), 'dd / MM / yyyy')
    },
    {
        title: 'Challenge 3',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.',
        tags: ['Energía Renovable', 'Salud', 'Social'],
        date: format(new Date(2021, 2, 28), 'dd / MM / yyyy')
    },
    {
        title: 'Challenge 4',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.',
        tags: ['Energía Renovable', 'Salud', 'Social'],
        date:format(new Date(2021, 5, 13), 'dd / MM / yyyy')
    },
    {
        title: 'Challenge 5',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.',
        tags: ['Energía Renovable', 'Salud', 'Social'],
        date: format(new Date(2021, 9, 21), 'dd / MM / yyyy')
    },
    {
        title: 'Challenge 6',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.',
        tags: ['Energía Renovable', 'Salud', 'Social'],
        date: format(new Date(2021, 3, 11), 'dd / MM / yyyy')
    },
    {
        title: 'Challenge 7',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.',
        tags: ['Energía Renovable', 'Salud', 'Social'],
        date: format(new Date(2021, 4, 15), 'dd / MM / yyyy')
    },
    {
        title: 'Challenge 8',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.',
        tags: ['Energía Renovable', 'Salud', 'Social'],
        date: format(new Date(2021, 6, 1), 'dd / MM / yyyy')
    },
    {
        title: 'Challenge 9',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.',
        tags: ['Energía Renovable', 'Salud', 'Social'],
        date: format(new Date(2021, 6, 4), 'dd / MM / yyyy')
    },
]

const getChallenge = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(challenges)
    }, 1500);
})

const ChallengeContainer = () => {

    const [challenges, setChallenges] = useState([]);
    const [preloader, setPreloader] = useState(false);

    useEffect(() => {
        getChallenge
            .then(resolve => setChallenges(resolve))
            .finally(() => setPreloader(false))
    }, [])

    return (
        <div className='challenge__card--container'>
            <ChallengeHeader />
            <ChallengeList preload={preloader} challenges={challenges} />
        </div>
    )
}

export default ChallengeContainer;
