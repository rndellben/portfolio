import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import {testimonials } from '@/data';


const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="text-3xl font-bold text-center mb-4">
        Kind words from 
        <span className="text-purple-500"> satisfied clients</span>
      </h1>
      <div className="flex flex-wrap items-center m-lg:mt-10">
        
          <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'
          />
       
      </div>
    </div>
  );
};

export default Clients;