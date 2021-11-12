import React from 'react';
import {Link} from 'react-router-dom';

const EmprendedorBtn = () => {
    return(
        <button className='entrepreneur--btn'>
            <Link to='/form-entrepreneur-login'>Participar como emprendedor</Link>
        </button>
    )
}

export default EmprendedorBtn;