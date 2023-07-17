import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //food Details

  foodDetaiils = [
    {
      id:1,
      foodName:"Chili Chicken Cheese Burger",
      foodDescription:"Spycy & Chees lovers",
      price:890,
      foodImage:"https://img.freepik.com/photos-premium/cheese-burger_445983-1809.jpg"
    },
    {
      id:2,
      foodName:"Grill Sandwich",
      foodDescription:"Veg Sandwtch for tomato lovers",
      price:620,
      foodImage:"https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    },
    {
      id:3,
      foodName:"Bubble Tea",
      foodDescription:"Beverages",
      price:550,
      foodImage:"https://images.unsplash.com/photo-1558857563-b371033873b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnViYmxlJTIwdGVhfGVufDB8fDB8fHww&w=1000&q=80"
    },
    {
      id:4,
      foodName:"Coca Cola",
      foodDescription:"Beverages",
      price:250,
      foodImage:"https://images.unsplash.com/photo-1606411324897-1cfa6b9336e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29jYSUyMGNvbGElMjBib3R0bGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    },
    {
      id:5,
      foodName:"French Fries",
      foodDescription:"Cryspy lovers",
      price:300,
      foodImage:"https://img.freepik.com/premium-photo/classic-side-dish-french-fries-with-beautiful-serving-plate-with-red-sauce_207126-7844.jpg"
    },
    {
      id:6,
      foodName:"Hot Dogs",
      foodDescription:"BBQ Sousages with cheese",
      price:900,
      foodImage:"https://img.freepik.com/free-photo/grilled-beef-hot-dog-with-ketchup-snack-generative-ai_188544-7829.jpg"
    },
    {
      id:7,
      foodName:"Chocolate Shake",
      foodDescription:"Beverages",
      price:850,
      foodImage:"https://images.lifestyleasia.com/wp-content/uploads/sites/3/2020/06/04142447/sara-cervera-xB0Kr0D0C8Y-unsplash-scaled.jpg"
    },
    {
      id:8,
      foodName:"Sushi",
      foodDescription:"For Korean Food Lovers",
      price:1800,
      foodImage:"https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    },
    {
      id:9,
      foodName:"Pasta",
      foodDescription:"Cheese and Chicken Pasta",
      price:1950,
      foodImage:"https://media.istockphoto.com/id/1325172440/photo/spaghetti-alla-puttanesca-italian-pasta-dish-with-tomatoes-black-olives-capers-anchovies-and.jpg?s=170667a&w=0&k=20&c=cesyGmFzzkg64c6NYgp1xvL0C_QB_yWFDwUfVe-VFS4="
    }
  ]
}
