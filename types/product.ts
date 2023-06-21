export type Product = {
  id: number;
  creationDate: Date;
  filters: object;
  images: Array<string>;
  name: string;
  price: string;
  productBase: object;
  productBaseId: string;
  quantity: number;
  status: string;
  store: object;
  storeId: string;
  updatedDate: Date;
  uriName: string;
  variant: Array<string>
};

export type Products = Product[];