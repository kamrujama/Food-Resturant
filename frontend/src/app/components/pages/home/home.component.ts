import { Component, OnInit } from '@angular/core';
import { FoodServicesService } from 'src/app/services/food-services.service';
import { Food } from 'src/app/shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = [

  ]
  constructor(private foodService : FoodServicesService, activeRoute : ActivatedRoute) {

    activeRoute.params.subscribe((params) =>{
      if(params.searchItem)
        this.foods = foodService.getAllItemBySearch(params.searchItem)
      else if(params.tag)
        this.foods = foodService.getAllFoodsByTag(params.tag)
      else
        this.foods = foodService.getAll()
    })


  }

  ngOnInit(): void {
  }

}
