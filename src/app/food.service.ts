import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  async getFood() {
    const resp = await fetch('https://my-json-server.typicode.com/angelmathew/jsonServer/posts');
    const data = await resp.json();
    return data;
  }
}
