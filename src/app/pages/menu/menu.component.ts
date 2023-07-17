import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/service/order-details.service';

OrderDetailsService
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private servise:OrderDetailsService) {}
  foodData:any;

  ngOnInit(): void {

    this.foodData = this.servise.foodDetaiils;
    
  }
}
