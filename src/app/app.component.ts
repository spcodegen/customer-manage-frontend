import { Component } from '@angular/core';
import { HeaderComponent } from "./common/header/header.component";
import { RouterModule } from '@angular/router';
import { ProductComponent } from "./page/product/product.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterModule, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customer-manage-app';
}
