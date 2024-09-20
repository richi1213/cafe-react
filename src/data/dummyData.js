const dummyFoodData = [
  {
    id: 1,
    name: "Double Cheeze Burger",
    category: "burger",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/burger1.png",
    price: 29.0,
    desc: "Try our delicious burger menu today and enjoy a satisfying meal.",
  },
  {
    id: 2,
    name: "Choco Donuts",
    category: "desert",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/desert1.png",
    price: 9.0,
    desc: "The Donut Shack Indulge your sweet tooth with our tempting desert menu, cakes, pies, ice creams, puddings and more.",
  },
  {
    id: 3,
    name: "Fish Salad",
    category: "meal",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/meal1.png",
    price: 34.0,
    desc: "Enjoy a satisfying and balanced meal with our meal menu, featuring a range of dishes & cuisines and cultures.",
  },
  {
    id: 4,
    name: "Shrimp Pizza",
    category: "pizza",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/pizza1.png",
    price: 24.0,
    desc: "Experience the authentic taste of Italy with our pizza menu with fresh and cheesy toppings.",
  },
  {
    id: 5,
    name: "Cheeze Burger",
    category: "burger",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/burger2.png",
    price: 19.0,
    desc: "Try our delicious burger menu today and enjoy a satisfying meal.",
  },
  {
    id: 6,
    name: "The Donut Shack",
    category: "desert",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/desert2.png",
    price: 14.0,
    desc: "Indulge your sweet tooth with our tempting desert menu, cakes, pies, ice creams, puddings and more.",
  },
  {
    id: 7,
    name: "Chicken Salad",
    category: "meal",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/meal2.png",
    price: 25.0,
    desc: "Enjoy a satisfying and balanced meal with our meal menu, featuring a range of dishes & cuisines and cultures.",
  },
  {
    id: 8,
    name: "Thai Checken Pizza",
    category: "pizza",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/pizza2.png",
    price: 35.0,
    desc: "Experience the authentic taste of Italy with our pizza menu with fresh and cheesy toppings.",
  },
  {
    id: 9,
    name: "Veggie Cheeze Burger",
    category: "burger",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/burger3.png",
    price: 35.0,
    desc: "Try our delicious burger menu today and enjoy a satisfying meal.",
  },
  {
    id: 10,
    name: "Red Velvet",
    category: "desert",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/desert3.png",
    price: 15.0,
    desc: "Indulge your sweet tooth with our tempting desert menu, cakes, pies, ice creams, puddings and more.",
  },
  {
    id: 11,
    name: "Paneer Salad",
    category: "meal",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/meal3.png",
    price: 20.0,
    desc: "Enjoy a satisfying and balanced meal with our meal menu, featuring a range of dishes & cuisines and cultures.",
  },
  {
    id: 12,
    name: "Shrimp Tomato Fusion",
    category: "pizza",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/pizza3.png",
    price: 30.0,
    desc: "Experience the authentic taste of Italy with our pizza menu with fresh and cheesy toppings.",
  },
  {
    id: 13,
    name: "Crispy Paneer Burger",
    category: "burger",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/burger4.png",
    price: 35.0,
    desc: "Try our delicious burger menu today and enjoy a satisfying meal.",
  },
  {
    id: 14,
    name: "Fried Cheesecake",
    category: "desert",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/desert4.png",
    price: 20.0,
    desc: "Indulge your sweet tooth with our tempting desert menu, cakes, pies, ice creams, puddings and more.",
  },
  {
    id: 15,
    name: "Salmon Salad",
    category: "meal",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/meal4.png",
    price: 40.0,
    desc: "Enjoy a satisfying and balanced meal with our meal menu, featuring a range of dishes & cuisines and cultures.",
  },
  {
    id: 16,
    name: "Mozzarella Heaven",
    category: "pizza",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/pizza4.png",
    price: 45.0,
    desc: "Experience the authentic taste of Italy with our pizza menu with fresh and cheesy toppings.",
  },
  {
    id: 17,
    name: "Triple Patty Burger",
    category: "burger",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/burger5.png",
    price: 55.0,
    desc: "Try our delicious burger menu today and enjoy a satisfying meal.",
  },
  {
    id: 18,
    name: "Mini Cream Sandwich",
    category: "desert",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/desert5.png",
    price: 10.0,
    desc: "Indulge your sweet tooth with our tempting desert menu, cakes, pies, ice creams, puddings and more.",
  },
  {
    id: 19,
    name: "Spciced Salmon Rice",
    category: "meal",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/meal5.png",
    price: 17.0,
    desc: "Enjoy a satisfying and balanced meal with our meal menu, featuring a range of dishes & cuisines and cultures.",
  },
  {
    id: 20,
    name: "Italian Cheese",
    category: "pizza",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/pizza5.png",
    price: 23.0,
    desc: "Experience the authentic taste of Italy with our pizza menu with fresh and cheesy toppings.",
  },
  {
    id: 21,
    name: "Pasta",
    category: "meal",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/meal6.png",
    price: 20.0,
    desc: "Enjoy a satisfying and balanced meal with our meal menu, featuring a range of dishes & cuisines and cultures.",
  },
  {
    id: 22,
    name: "Classic Pizza",
    category: "pizza",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/pizza6.png",
    price: 20.0,
    desc: "Experience the authentic taste of Italy with our pizza menu with fresh and cheesy toppings.",
  },
  {
    id: 23,
    name: "Bloomin' Baked Potato",
    category: "meal",
    imgSrc:
      "https://odebsiqxhqzzsgxlflvs.supabase.co/storage/v1/object/public/food-images/meal7.png",
    price: 30.0,
    desc: "Enjoy a satisfying and balanced meal with our meal menu, featuring a range of dishes & cuisines and cultures.",
  },
];

export default dummyFoodData;
