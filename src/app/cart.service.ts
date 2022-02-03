import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {filter,find,map} from'rxjs/operators';
import { Items } from './home/Item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems$ = new BehaviorSubject<Items[]>([]);
  public stringItem$ = new BehaviorSubject<String>('');
  public favItems$ = new BehaviorSubject<Items[]>([]);

  constructor() { }

setSingleItem(item: Items) {
    // this.cartItems$.next([...this.cartItems$.value, item]);
    let existingItemValue:any;
    this.cartItems$.pipe(
      map((cartItem:Items[])=>cartItem.find((cart:Items)=>cart.id===item.id))
    ).subscribe((d:any)=>{existingItemValue=d})

    if(!existingItemValue)
    {
      this.cartItems$.next([...this.cartItems$.value, item]);
    }
    else{
      existingItemValue.quantity++;
      existingItemValue.totalPrice=existingItemValue.totalPrice*existingItemValue.quantity
    }

}
setFavItem(item: Items) {
  this.favItems$.next([...this.favItems$.value, item]);
}

deleteCart(item: Items) {
  const items = this.cartItems$.value;
  let index:any;
  for (let i = 0; i < items.length; i++) {
      if (item.id === items[i].id) {
          index = i;
      }
  }
  items.splice(index, 1);
  this.cartItems$.next(items);
}

sendNotification(data:string){
  this.stringItem$.next(data)
}
}
