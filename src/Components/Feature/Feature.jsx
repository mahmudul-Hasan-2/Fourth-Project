import { Check } from 'lucide-react';
import React from 'react';

const Feature = ({ feature }) => {
    console.log(feature);
    return (
        <div>
            <p className='flex items-center gap-2 font-bold'><Check color="#10b981" size={18} strokeWidth={3} /> {feature}</p>
        </div>
    );
};

export default Feature;