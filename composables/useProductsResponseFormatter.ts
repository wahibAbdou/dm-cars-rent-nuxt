import type { ProductCardsMap } from "~/types";

export const useProductsResponseFormatter = (data: ProductCardsMap) => {
  if (data && Array.isArray(data)) {
    return data.map<ProductCardsMap>((carDetails, index) => {
      const { pricePerDay, people, gasolineLiter } = carDetails;
      return {
        index,
        ...carDetails,
        pricePerDay: `$${pricePerDay.toFixed(2)}`,
        people: `${people} People`,
        gasolineLiter: `${gasolineLiter}L`,
      };
    });
  };
}