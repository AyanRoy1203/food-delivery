export interface IRestaurant{
    _id: string;
    name: string;
    image: string;
    
    description: string;
    rating: number;
    currentOffer: string;
}
export interface IMenuItems{
_id: string;
restaurantId: string;
name: string;
image: string;
price: number;
description: string;
}