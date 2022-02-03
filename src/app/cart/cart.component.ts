import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service"
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {
  tableHeader=["","Product","Price",'Quantity','Total Amounts']
  public tableRow:any;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(d=>{
      this.tableRow=d
    })
    this.cartService.sendNotification("ang")
  }

  deleteItem(item:any){
    this.cartService.deleteCart(item)
  }
}
