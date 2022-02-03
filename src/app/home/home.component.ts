import { Component, OnInit } from '@angular/core';
import { Items } from './Item.model';
import {CartService} from "../cart.service";
import {FoodService} from "../food.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public items:Items[]=[];

  constructor(private cartService:CartService,private foodService:FoodService) { }

  ngOnInit(): void {
    this.fetchFood();
  }
  onAddtoCart(item:Items){
    this.cartService.setSingleItem(item)
  }

  onAddtoFavourite(item:Items){
    this.cartService.setFavItem(item)
  }

  private async fetchFood() {
    this.items = await this.foodService.getFood()
  }

}
