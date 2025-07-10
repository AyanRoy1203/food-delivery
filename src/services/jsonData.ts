import { IMenuItems, IRestaurant } from "../interfaces/restaurant";
export const restaurantList: IRestaurant[] = [
  {
    _id: "1",
    name: "Urban Thai Delight",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop",

    description: "Fresh and flavorful Thai food",
    currentOffer: "Free Dessert",
    rating: 4.2,
  },
  {
    _id: "2",
    name: "Spice Garden Grill",
    image:
      "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=400",
    description: "Authentic Indian spicy dishes",
    currentOffer: "20% Off",
    rating: 4.5,
  },
  {
    _id: "3",
    name: "Burger Stack House",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=250&fit=crop",
    description: "Juicy burgers and fries",
    currentOffer: "Buy 1 Get",
    rating: 4.8,
  },
  {
    _id: "4",
    name: "Green Leaf Cafe",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=250&fit=crop",
    description: "Healthy organic meal options",
    currentOffer: "Lunch Combo",
    rating: 3.9,
  },
  {
    _id: "5",
    name: "Royal Punjabi Tandoor",
    // replacing with Unsplash:
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=250&fit=crop", // replace with actual full photo URL from turn0image1
    description: "Classic Punjabi tandoori dishes",
    currentOffer: "Flat 30%",
    rating: 4.6,
  },
];

export const menuItemsList: IMenuItems[] = [
  // Urban Thai Delight
  {
    _id: "m6",
    restaurantId: "1",
    name: "Pad Thai Noodles",
    image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
    price: 220,
    description: "Stir-fried noodles with vegetables and peanut topping",
  },
  {
    _id: "m7",
    restaurantId: "1",
    name: "Green Chicken Curry",
    image: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg",
    price: 240,
    description: "Thai green curry with chicken and coconut milk",
  },
  {
    _id: "m8",
    restaurantId: "1",
    name: "Tom Yum Soup",
    image: "https://images.pexels.com/photos/4061522/pexels-photo-4061522.jpeg",
    price: 160,
    description: "Hot and sour soup with shrimp and herbs",
  },
  {
    _id: "m9",
    restaurantId: "1",
    name: "Mango Sticky Rice",
    image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg",
    price: 140,
    description: "Sweet rice dessert with fresh mango slices",
  },
  {
    _id: "m10",
    restaurantId: "1",
    name: "Thai Spring Rolls",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    price: 120,
    description: "Crispy rolls stuffed with vegetables and glass noodles",
  },

  // Spice Garden Grill
  {
    _id: "m1",
    restaurantId: "2",
    name: "Butter Chicken",
    image: "https://images.pexels.com/photos/1639558/pexels-photo-1639558.jpeg",
    price: 250,
    description: "Rich creamy chicken curry with Indian spices",
  },
  {
    _id: "m2",
    restaurantId: "2",
    name: "Paneer Tikka",
    image: "https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg",
    price: 200,
    description: "Grilled paneer cubes marinated in Indian spices",
  },
  {
    _id: "m3",
    restaurantId: "2",
    name: "Chicken Biryani",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    price: 280,
    description: "Spiced rice layered with marinated chicken pieces",
  },
  {
    _id: "m4",
    restaurantId: "2",
    name: "Masala Dosa",
    image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
    price: 180,
    description: "Crispy dosa filled with spiced mashed potatoes",
  },
  {
    _id: "m5",
    restaurantId: "2",
    name: "Tandoori Roti",
    image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg",
    price: 30,
    description: "Whole wheat flatbread cooked in clay tandoor",
  },

  // Burger Stack House
  {
    _id: "m11",
    restaurantId: "3",
    name: "Double Cheeseburger",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    price: 180,
    description: "Two patties with melted cheese and pickles",
  },
  {
    _id: "m12",
    restaurantId: "3",
    name: "BBQ Chicken Burger",
    image: "https://images.pexels.com/photos/1639558/pexels-photo-1639558.jpeg",
    price: 170,
    description: "Grilled chicken with BBQ sauce and onions",
  },
  {
    _id: "m13",
    restaurantId: "3",
    name: "Veggie Cheese Burger",
    image: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg",
    price: 150,
    description: "Vegetable patty with lettuce, tomato, and cheese",
  },
  {
    _id: "m14",
    restaurantId: "3",
    name: "Classic French Fries",
    image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
    price: 80,
    description: "Crispy golden fries with ketchup and seasoning",
  },
  {
    _id: "m15",
    restaurantId: "3",
    name: "Crispy Onion Rings",
    image: "https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg",
    price: 90,
    description: "Deep-fried onion rings served with spicy mayo",
  },

  // Green Leaf Cafe
  {
    _id: "m16",
    restaurantId: "4",
    name: "Avocado Toast",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    price: 140,
    description: "Sourdough bread topped with smashed seasoned avocado",
  },
  {
    _id: "m17",
    restaurantId: "4",
    name: "Quinoa Power Bowl",
    image: "https://images.pexels.com/photos/1639558/pexels-photo-1639558.jpeg",
    price: 180,
    description: "Healthy quinoa bowl with veggies and seeds",
  },
  {
    _id: "m18",
    restaurantId: "4",
    name: "Grilled Veg Wrap",
    image: "https://images.pexels.com/photos/128388/pexels-photo-128388.jpeg",
    price: 160,
    description: "Wrap stuffed with grilled seasonal vegetables",
  },
  {
    _id: "m19",
    restaurantId: "4",
    name: "Mixed Fruit Smoothie",
    image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg",
    price: 120,
    description: "Refreshing smoothie with banana, berries, almond milk",
  },
  {
    _id: "m20",
    restaurantId: "4",
    name: "Fresh Greek Salad",
    image: "https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg",
    price: 130,
    description: "Lettuce, feta cheese, olives, and vinaigrette dressing",
  },

  // Royal Punjabi Tandoor
  {
    _id: "m21",
    restaurantId: "5",
    name: "Amritsari Kulcha",
    image: "https://images.pexels.com/photos/4611988/pexels-photo-4611988.jpeg",
    price: 150,
    description: "Stuffed kulcha with spicy chickpeas and butter",
  },
  {
    _id: "m22",
    restaurantId: "5",
    name: "Dal Makhani",
    image: "https://images.pexels.com/photos/4611990/pexels-photo-4611990.jpeg",
    price: 190,
    description: "Creamy black lentils cooked with Indian spices",
  },
  {
    _id: "m23",
    restaurantId: "5",
    name: "Tandoori Chicken",
    image: "https://images.pexels.com/photos/4611991/pexels-photo-4611991.jpeg",
    price: 260,
    description: "Chicken grilled with yogurt, herbs, and spices",
  },
  {
    _id: "m24",
    restaurantId: "5",
    name: "Rajma Chawal",
    image: "https://images.pexels.com/photos/4611992/pexels-photo-4611992.jpeg",
    price: 160,
    description: "Red kidney beans curry with basmati rice",
  },
  {
    _id: "m25",
    restaurantId: "5",
    name: "Punjabi Lassi",
    image: "https://images.pexels.com/photos/4611993/pexels-photo-4611993.jpeg",
    price: 60,
    description: "Chilled sweet yogurt drink with cardamom flavor",
  },
];