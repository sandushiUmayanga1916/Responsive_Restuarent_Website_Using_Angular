import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/service/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  constructor(private param:ActivatedRoute,private service:OrderDetailsService) {}
  getmenuId:any;
  menuData:any;
  ngOnInit(): void {
    this.getmenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getmenuId,'getmenu')
    if(this.getmenuId)
    {
      this.menuData = this.service.foodDetaiils.filter((value)=>
      {
        return value.id == this.getmenuId;
      });
      console.log(this.menuData,'menudata>>')
    }
  }

}
