import React from 'react';
import Navbar from '../components/navbar';
import Front from '../components/front';
import Content from '../components/content';
import Footer from '../components/footer';
import Timer from '../components/Timer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Front />
      <Content />
      <Timer />
      <Footer />
    </div>
  );
};

export default Home;
