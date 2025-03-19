import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from "../../common/product-item/product-item.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [ProductItemComponent, NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  ngOnInit(): void {
    this.loadProductInformation();
  }

  public listOfProducts:any = [];

  loadProductInformation(){
    fetch("https://fakestoreapi.com/products/")
    .then(res=>res.json())
    .then(body=>{
        this.listOfProducts = body;
        console.log(this.listOfProducts);
        
    })
  }
}
