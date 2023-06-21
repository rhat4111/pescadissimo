import React from 'react';
import { useFAQ } from 'store';
import Header from 'layouts/Header';

import {
  Banner,
  FAQ,
  WhySell,
  HowDoesWork,
  DoYouWantSell,
} from 'components/domain/Become';

const Become: React.FC = () => {
  const { faq } = useFAQ();

  return (
    <>
      <Header logoColor="white" textColor="white" />
      <div className="become-container">
        <div className="main">
          <Banner />
          <WhySell />
          <HowDoesWork />
        </div>
        <DoYouWantSell />
        {faq && faq.sellers && <FAQ data={faq.sellers} />}

      </div>

      <style jsx>
        {`
          .become-container {
            margin-top: -92px;
            padding-top: 92px;
            background: #212121;
          }

          .main {
            padding: 32px 56px 32px 64px;
          }

          @media(max-width: 1024px) {
            .main {
              padding: 0 26px 32px;
            }
          }

          @media(max-width: 768px) {
            .main {
              padding: 0 24px 32px;
            }
          }

        `}
      </style>
    </>
  );
};

export default Become;