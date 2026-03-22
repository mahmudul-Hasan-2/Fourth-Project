import React from 'react';
import Card from '../Card/Card';

const pricingPlans = [
    {
        id: 1,
        name: "Basic",
        price: "$9",
        duration: "month",
        description: "Perfect for beginners who want to get started with simple projects.",
        features: [
            "1 Website",
            "Basic Support",
            "Limited Features",
            "Email Support",
            "Community Access"
        ],
        isPopular: false,
        buttonText: "Choose Plan"
    },
    {
        id: 2,
        name: "Standard",
        price: "$19",
        duration: "month",
        description: "Ideal for growing users who need more flexibility and features.",
        features: [
            "5 Websites",
            "Priority Support",
            "All Basic Features",
            "Analytics Dashboard",
            "Custom Domain"
        ],
        isPopular: true,
        buttonText: "Get Started"
    },
    {
        id: 3,
        name: "Premium",
        price: "$39",
        duration: "month",
        description: "Best for professionals who want full control and premium tools.",
        features: [
            "Unlimited Websites",
            "24/7 Support",
            "Advanced Features",
            "Performance Optimization",
            "Team Collaboration"
        ],
        isPopular: false,
        buttonText: "Upgrade Now"
    }
];

const Cards = () => {
    return (
        <div>
            {
                pricingPlans.map(pricingPlan => <Card key={pricingPlan.id} pricingPlan={pricingPlan}></Card>)
            }
        </div>
    );
};

export default Cards;