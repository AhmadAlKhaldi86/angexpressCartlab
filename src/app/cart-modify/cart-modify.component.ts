import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service'
@Component({
  selector: 'app-cart-modify',
  templateUrl: './cart-modify.component.html',
  styleUrls: ['./cart-modify.component.css']
})
export class CartModifyComponent implements OnInit {
  // public cartObject = { 
  //   id: "",
  //   product: "",
  //   price: "",
  //   quantity: ""
  // }

  // setObject(n1,n2,n3,n4) {
  //   this.cartObject.id = n1;
  //   this.cartObject.product = n2;
  //   this.cartObject.price = n3;
  //   this.cartObject.quantity = n4;
  // }

  public posts = [];
  public prodId = [];
  public err;

  constructor(private __CartServiceService: CartServiceService) { }

  ngOnInit() {
    this.__CartServiceService.getPosts().
    // subscribe((posts => console.log(posts))
    subscribe((posts => this.posts = posts)
    )
  }

  getProductById(id) {
    this.__CartServiceService.getProductById(id).
    subscribe((res) => {this.prodId = res}, 
    (error) => this.err = error
    )
    
    // subscribe(res => console.log(res))
  }

  postProduct(n1,n2,n3,n4) {
    this.__CartServiceService.postProduct(n1,n2,n3,n4).
    subscribe(res => console.log('Added Item'))
  }

  delProductById(id) {
    this.__CartServiceService.delProductById(id).
    subscribe(res => console.log('Deleted Item'))
  }

  updateProductById(price,id) {
    this.__CartServiceService.updateProductById(price,id).
    subscribe(res => console.log('Updated Item'))
  }
}
