import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-homescreen',
  imports: [
    HeaderComponent,
    ProductListComponent,
    SidebarComponent

  ],
  templateUrl: './homescreen.component.html',
  styleUrl: './homescreen.component.css'
})
export class HomescreenComponent {

}
