import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/service/food.service';
import { Food } from 'src/app/shared/model/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[]=[];

  constructor(private api:FoodService, activeRouted:ActivatedRoute){
       activeRouted.params.subscribe((params)=>{
        if(params.searchTerm)
          this.foods=this.api.getAllFoodBySearchTerm(params.searchTerm)
        else
         this.foods=api.getAll()
       })
  }

  ngOnInit(): void
  {

  }
}
