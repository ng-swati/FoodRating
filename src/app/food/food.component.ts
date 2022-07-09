import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foods=[
    {
      id:1,
      name:"Fried Rice",
      img:"assets/img/fried_rice.webp",
      rating:4.5,
      price:250,
      category:"chinese"
    },
    {
      id:2,
      name:"Dosa",
      img:"assets/img/dosa.jfif",
      rating:3.5,
      price:45,
      category:"south indian"
    },
    {
      id:3,
      name:"Chicken Tandoori",
      img:"assets/img/punjabi.jpeg",
      rating:5.0,
      price:1500,
      category:"punjabi"
    },
    {
      id:4,
      name:"pasta",
      img:"assets/img/pasta.jpg",
      rating:4.3,
      price:120,
      category:"italian"
    }
  ]

  envokedByChild(data:number)
  {
   console.log(data);
   
  }
}
