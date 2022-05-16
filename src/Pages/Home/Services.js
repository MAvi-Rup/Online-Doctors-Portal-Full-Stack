import React from 'react';
import fluoride from '../../assests/images/fluoride.png';
import cavity from '../../assests/images/cavity.png';
import whitening from '../../assests/images/whitening.png';

import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae architecto asperiores ad inventore fugiat voluptate doloribus illo autem, nobis voluptates velit repudiandae id eveniet maiores labore, officia explicabo dolor eum.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae architecto asperiores ad inventore fugiat voluptate doloribus illo autem, nobis voluptates velit repudiandae id eveniet maiores labore, officia explicabo dolor eum.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae architecto asperiores ad inventore fugiat voluptate doloribus illo autem, nobis voluptates velit repudiandae id eveniet maiores labore, officia explicabo dolor eum.',
            img: whitening
        },
    ];
    return (
        <div class='my-28'>
            <div className='text-center'>
                <h1 className='text-primary text-xl font-bold uppercase'>Our Services</h1>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }

            </div>

        </div>
    );
};

export default Services;