import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service"

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.stringItem$.subscribe((d)=>console.log("test",d))
  }

}
