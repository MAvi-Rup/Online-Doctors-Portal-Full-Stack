import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assests/icons/clock.svg'
import marker from '../../assests/icons/marker.svg'
import phone from '../../assests/icons/phone.svg'

const Info = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <InfoCart cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCart>
                <InfoCart cardTitle="Our Locations" bgClass="bg-accent" img={marker}></InfoCart>
                <InfoCart cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCart>
            </div>
        </div>
    );
};

export default Info;