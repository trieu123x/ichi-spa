import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import PriceTable from '../components/PriceTable';
import BookingForm from '../components/BookingForm';

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <PriceTable />
      <BookingForm />
    </main>
  );
};

export default Home;
