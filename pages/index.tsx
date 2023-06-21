import React from 'react';
import {
  AboutUs,
  Banner,
  Community,
  Help,
  Products,
  Sellers,
  WhyChooseUs
} from 'components/domain/Home';
import { Opinion } from 'components/shared/Opinion';
import { useProduct, useSeller } from 'store';
import { Adventure } from 'components/domain/Home/Adventure';
import Header from 'layouts/Header';

const Home: React.FC = () => {
  const { products } = useProduct();
  const { sellers } = useSeller();

  return (
    <>
      <Header logoColor="white" textColor="white" />
      <div className="home-container">
        <Banner />
        <AboutUs />
        <Help />
        <Products data={products} />
        <Sellers data={sellers} />
        <Community />
        <WhyChooseUs />
        <Opinion />
        <Adventure />
      </div>
      <style jsx>
        {`

        `}
      </style>
    </>
  );
};

export default Home;