import React from 'react';
import EmprendedorBtn from './EmprendedorBtn.jsx';
import VerMasBtn from './VerMasBtn.jsx';
import hold_up from '../../assets/hold_up.png';
import Logo from '../../assets/logo-color.png';
import icon_people05 from '../../assets/icons_people05.png';

const BannerBody = () => {
    return (
        <div className='banner__body--container'>
            <div className='banner__body--content'>
                <div className='banner__text--content'>
                    <h2><img src={hold_up} alt='hold_up logo' width='163px' height='39.5px'/></h2>
                    <h3>By <img src={Logo} alt='make_sense logo' width='157.25px' height='25.85px'/></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eligendi maxime molestiae. Suscipit, harum! Provident pariatur, est error quos deserunt dolor hic tempora tempore ex tenetur ipsa inventore accusantium deleniti!
                    Error nulla ducimus nemo quia accusantium voluptatem ab reiciendis, incidunt, obcaecati velit qui quos, culpa officiis. Ipsum, inventore nobis corrupti soluta totam aspernatur harum modi voluptas reprehenderit ea est laudantium!</p>
                    <EmprendedorBtn />
                </div>
                <img src={icon_people05} alt='make_sense people' width='512px' height='512px'></img>
            </div>
            <VerMasBtn />
        </div>
    )
}

export default BannerBody;