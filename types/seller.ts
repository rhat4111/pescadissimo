export type Seller = {
  _id: number;
  avatar: string;
  isLike: boolean;
  name: string;
  location: string;
  rate: number;
  followingCount: number;
  description: string;
};

export type Sellers = Seller[];