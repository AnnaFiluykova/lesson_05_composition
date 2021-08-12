import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import './common.css';

const Page = () => {
  return (
    <div className='container'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Page;
