import React from 'react';

const Hero = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="./images/chair.png" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smiles Start Here.</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button class="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;