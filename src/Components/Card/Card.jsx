import React from 'react';
import Feature from '../Feature/Feature';

const Card = ({ pricingPlan }) => {

    return (
        <div className='rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-black/20 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-1000 hover:-translate-y-2 px-3 py-5 sm:p-5 space-y-4'>
            <div className='flex items-center justify-between'>
                {pricingPlan.isPopular && <span className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-cyan-500/30'>Most Popular</span>}
                <h2 className='text-lg sm:text-xl font-bold'>{pricingPlan.name} Plan</h2>
            </div>
            <p className='font-semibold'>{pricingPlan.price} {pricingPlan.duration}</p>
            <p className='font-semibold'>{pricingPlan.description}</p>

            <div className='space-y-2'>
                {
                    pricingPlan.features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>

            <button className='btn btn-primary'>{pricingPlan.buttonText}</button>
        </div >
    );
};

export default Card;