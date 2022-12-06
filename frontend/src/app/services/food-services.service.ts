import { Injectable } from '@angular/core';
import { food_data, food_tags } from 'src/data';
// import { data } from 'src/data';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodServicesService {

  constructor() { }

  getAll():Food[]{
    return food_data
  }

  getAllItemBySearch(searchItem:string){
    return this.getAll().filter(food =>
      {
        return food.name.toUpperCase().includes(searchItem.toUpperCase())
      })
  }

  getAllTags(){
    return food_tags
  }

  getAllFoodsByTag(tag:string){
    return tag == "All" ?
    this.getAll():
    this.getAll().filter(food => food.tags?.includes(tag))
  }

}
