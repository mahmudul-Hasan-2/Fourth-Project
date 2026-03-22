import React from 'react';

const Card = ({ pricingPlan }) => {
    console.log(pricingPlan);
    return (
        <div>
            <h2>{pricingPlan.name}</h2>
        </div>
    );
};

export default Card;