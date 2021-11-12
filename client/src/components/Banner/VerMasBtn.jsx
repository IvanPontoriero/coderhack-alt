import React from 'react';
import {Link} from 'react-router-dom';
import {MdKeyboardArrowDown} from 'react-icons/md';
// import vector from '../../assets/vector.png';

const VerMasBtn = () => {
    return(
        <div className='ver__mas--btn'>
            <Link to='/challenges'>
                <h5>ver más</h5>
                <MdKeyboardArrowDown/>
            </Link> 
        </div>
    )
}

export default VerMasBtn;