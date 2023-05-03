/* eslint-disable prettier/prettier */
export type Watch = {
  id: number;
  listing: {
    id: number;
    model: {
      id: number;
      name: string;
      displayName: string;
      brand: {
        id: number;
        name: string;
        displayName: string;
      };
      referenceNumber: string;
      description: string;
    };
    manufactureYear: number;
    condition: string;
    images: {
      type: string;
      image: {
        id: number;
        url: string;
      };
    }[];
    created: string;
    updated: string;
  };
  salePriceCents: number;
  commissionRateBips: number;
  sellerFeeCents: number;
  payoutAmountCents: number;
};
