import { Component, OnInit } from '@angular/core';
import { FoodServicesService } from 'src/app/services/food-services.service';
import { Tags } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  totalTags:Tags[] = [

  ]
  constructor(private food : FoodServicesService) {
    this.totalTags = food.getAllTags()
   }

  ngOnInit(): void {
  }

}
