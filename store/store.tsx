import React from 'react';
import { AboutProvider } from './about';
import { ProductProvider } from './product';
import { SellerProvider } from './seller';
import { FAQProvider } from './faq';
import { FilterProvider } from './filter';

type InitialStateProps = {
  children: React.ReactNode;
}

type ProviderProps = {
  contexts: any;
  children: React.ReactNode;
}

const ProviderComposor: React.FC<ProviderProps> = ({ contexts, children }) =>
  contexts.reduceRight(
    (
      kids: React.ReactNode,
      parent: React.DetailedReactHTMLElement<{ children: React.ReactNode }, HTMLElement>
    ) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );

export const StoreProvider: React.FC = ({ children }) => {
  return (
    <ProviderComposor
      contexts={[
        <AboutProvider key="1" />,
        <ProductProvider key="2" />,
        <SellerProvider key="3" />,
        <FAQProvider key="4" />,
        <FilterProvider key="5" />
      ]}
    >
      {children}
    </ProviderComposor>
  )
}