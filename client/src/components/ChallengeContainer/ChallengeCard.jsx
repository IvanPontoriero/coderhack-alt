import { React } from 'react';
import Card from 'react-bootstrap/Card';
import LikeBtn from './LikeBtn';
import CommentBtn from './CommentBtn';

const ChallengeCard = ({ challenge }) => {
    
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../../assets/icons_people05.png" />
            <Card.Body>
                <p className='challenge__date'> {challenge.date} </p>
                <div className='challenge__header--container'>
                    <Card.Title>{challenge.title}</Card.Title>
                    <LikeBtn />      <CommentBtn />
                </div>
                <div className='challenge__tags'>
                    <div>{challenge.tags[0]}</div>
                    <div>{challenge.tags[1]}</div>
                    <div>{challenge.tags[2]}</div>
                </div>
                <Card.Text>
                {challenge.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ChallengeCard;