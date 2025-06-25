import { IRestaurant } from "../interfaces/restaurant";
import { restaurantList } from "./jsonData";

export const getAllRestaurants = async (): Promise<IRestaurant[]> => {
  const allRestaurants = await new Promise<IRestaurant[]>((resolve, reject) => {
    resolve(restaurantList);
    reject(null);
  });
  return allRestaurants;
};
