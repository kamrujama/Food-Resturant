import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchItem = ''

  constructor(activeRoute : ActivatedRoute, private route:Router) {
    activeRoute.params.subscribe((params) =>{
      if(params.searchItem)
        this.searchItem = params.searchItem
    })
  }

  ngOnInit(): void {
  }

search(searchTerm:string){
  if(searchTerm)
    this.route.navigateByUrl('/search/'+searchTerm)
}

}
